const router = require('express').Router();
const newUser = require('./newUser');

router.use('/guest', newUser);

module.exports = router;