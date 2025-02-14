const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post } = require('../../models');

// /api/post
router.post('/', async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        if (!req.body.post_title || !req.body.post_content) {
            return res.status(400).json({ message: "Missing post title or content" });
        }

        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        });

        console.log("Created Post:", newPost); 
        res.status(200).json(newPost);  
    } catch (err) {
        console.error("Server Error:", err);
        res.status(500).json({ message: "Failed to create post.", error: err.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'], 
                }
            ],
            order: [['date_created', 'DESC']], 
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching posts.', error: err.message });
    }
});

// /api/user/post

//I believe this will be the route to get an individual post. May be good for viewing a post and its comments.

// router.get('/post/:id', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id);

//         const post = postData.get({ plain: true });

//         res.status(200).json(post);
//     } catch (err) {
//         res.status(500).json('Server Error: Could not get Post.');
//     }
// })

router.put('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            date_created: req.body.date_created,
            user_id: req.session.user_id,
            username: req.body.username,
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json('Server Error: Could not update Post.');
    }
})

router.delete('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json('Server Error: Could not delete Post.');
    }
})

router.post('/post', withAuth, async (req, res) => {
    try {
        const username = req.session.username;

        if (!username) {
            return res.status(401).json({ message: 'Unauthorized: User not logged in' });
        }

        // Fetch the username from the database using the session username
        const userData = await User.findByPk(username);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get username in plain object format
        const user = userData.get({ plain: true });

        // Create a new post with username
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            date_created: req.body.date_created,
            user_id: user_id,
            username: user.username, // Add username
            post_id: req.body.post_id,
        });

        // Send response including the username
        res.status(200).json({ 
            newPost, 
            username: user.username 
        });

    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ message: 'Server Error: Could not add Post.' });
    }
});


module.exports = router;