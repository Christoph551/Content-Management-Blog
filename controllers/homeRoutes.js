const router = require('express').Router();


// router.get('/', async (req, res) => {
//     res.render('home', {
//         title: "Homepage"
//     });
// })

// router.get('/login', async (req, res) => {
//     res.render('login', {
//         title: "login"
//     });
// })

router.get('/', async (req, res) => {
    try {
        res.render('home', {
            title: "Homepage",
            loggedIn: req.session.loggedIn
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


module.exports = router;