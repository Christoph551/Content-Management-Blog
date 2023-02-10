const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const  User  = require('../../models');

// POST calls to /api/user
router.post('/user', async (req, res) => {
    try {
        const newUser = await User.create({
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