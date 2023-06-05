const router = require('express').Router();
const withAuth = require('../../utils/auth');
const  { User, Post }  = require('../../models');

// /api/post
router.post('/', withAuth, async (req,res) => {
    try {
      const newPost = await Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.session.user_id //having issue finding this piece of data...
      })
      res.status(200).json(newPost)
    }
    catch (err) {
      res.status(400).json
    }
  })

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
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            date_created: req.body.date_created,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })

        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json('Server Error: Could not add Post.');
    }
})

module.exports = router;