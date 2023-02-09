const router = require('express').Router();
const { signUp } = require('../../models');

// POST calls to /api/signUp
router.post('/', async (req, res) => {
    try {
        const newUser = await signUp.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });

        console.log(newUser)

        res.status(200).json(newUser);
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.loggedIn = true;
            res.status(200).json(newUser);
        }
        );

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;