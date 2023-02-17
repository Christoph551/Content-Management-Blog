const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('home', {
            title: "Homepage",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/dashboard');
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

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        res.render('dashboard', {
            title: "Dashboard",
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

module.exports = router;