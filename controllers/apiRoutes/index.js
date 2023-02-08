const router = require('express').Router();
const newUser = require('./newUser');

router.use('/signUp', newUser);

module.exports = router;