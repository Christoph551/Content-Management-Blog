const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('home', {
        title: "Homepage"
    });
})


// router.get('/', async (req, res) => {
//     try {
//         res.render('home', {
//             loggedIn: req.session.loggedIn
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;