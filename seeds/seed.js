const sequelize = require('../config/connection');
const { User, Post, NewPost } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const newPostData = require('./newPostData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Post.bulkCreate(postData);
    await NewPost.bulkCreate(newPostData);

    console.log("~* Database Seeded! *~")
    process.exit(0)
}

seedDatabase();