const User = require('./user');
const Post = require('./post');
const NewPost = require('./newPost');


User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(NewPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(NewPost, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

NewPost.belongsTo(User, {
    foreignKey: 'user_id'
});

NewPost.belongsTo(Post, {
    foreignKey: 'post_id'
});



module.exports = {
    User ,
    Post,
    NewPost
};