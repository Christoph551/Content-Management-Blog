const Guest = require('./guest');
const Post = require('./post');


Guest.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(Guest, {
    foreignKey: 'user_id'
});


module.exports = { Guest };