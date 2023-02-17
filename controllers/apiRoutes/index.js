const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoutes');
// const newPostRoutes = require('./newPostRoutes');

router.use('/user', userRoutes);
// router.use('/post', postRoutes);
// router.use('/newPost', newPostRoutes);

module.exports = router;