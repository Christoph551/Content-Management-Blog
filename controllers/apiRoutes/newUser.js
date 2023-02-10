const router = require('express').Router();
const { guest } = require('../../models');

// POST calls to /api/guest
router.post('/guest', async (req, res) => {
    try {
        const newUser = await guest.create({
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