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
            title: "Login",
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', async (req, res) => {
    try {
        res.render('user', {
            title: "User",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {
            title: "Dashboard",
            loggedIn: req.session.loggedIn
        });
// added if statement after ASK BCS
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;