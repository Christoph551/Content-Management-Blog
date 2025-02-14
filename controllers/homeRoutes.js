const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const postDataSerialize = postData.map((post) => post.get({ plain: true }));
        console.log(postDataSerialize);

        res.render('home', {
            title: "Homepage",
            postDataSerialize,
            logged_in: req.session.logged_in, // Pass the logged_in variable
            username: req.session.username,
            user_id: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/home');
            return;
        }
        res.render('login', {
            title: "Login",
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signUp', async (req, res) => {
    try {
        res.render('user', {
            title: "Create your account!",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    try {
        res.render('post', {
            title: "Make a Post!",
            logged_in: req.session.logged_in,
            username: req.session.username
        });

        if (!req.session.logged_in) {
            res.redirect('/login');
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;