const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');



router.get('/post', async (req, res) => {
    try {
        res.render('home', {
            title: "Home",
            loggedIn: req.session.loggedIn
        });
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: User, include: { model: Post } }]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json('Server Error: Could not get Posts.');
    }
})

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/home');
            return;
        }
        res.render('home', {
            title: "Home",
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// /api/user/profile

router.get('/profile', async (req, res) => {
    try {
        res.render('profile', {
            title: "Profile",
            loggedIn: req.session.loggedIn
        });

        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/home');
            return;
        }
        res.render('login', {
            title: "Login",
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signUp', async (req, res) => {
    try {
        res.render('user', {
            title: "signUp",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;