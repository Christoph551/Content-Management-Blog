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
                }
            ]
        })

        const postDataSerialize = postData.map((post) => post.get({ plain: true }))
        console.log(postDataSerialize)
        res.render('home', {
            postDataSerialize,
            title: "Homepage",
            loggedIn: req.session.loggedIn
        });
    }
    catch (err) {
        res.status(500).json(err)
    }

})

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
            title: "Create your account",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    try {
        res.render('post', {
            title: "Make a Post!",
            // loggedIn: req.session.loggedIn
        });

        // if (!req.session.loggedIn) {
        //     res.redirect('/login');
        //     return;
        // }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;