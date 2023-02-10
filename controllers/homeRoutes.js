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
        res.render('login', {
            title: "login",
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/guest', async (req, res) => {
    try {
        res.render('guest', {
            title: "guest",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {
            title: "dashboard",
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;