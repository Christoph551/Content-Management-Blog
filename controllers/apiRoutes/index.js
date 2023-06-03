const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
// const newPostRoutes = require('./newPostRoutes');

router.use('/post', postRoutes);
router.use('/profile', userRoutes);
// router.use('/newPost', newPostRoutes);

module.exports = router;