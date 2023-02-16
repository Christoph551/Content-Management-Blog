const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const NewPost = require('./newPost');

class Post extends Model {};


// Write out which types of things you would like your user to be able to post.
// Think about what elements the user would interact with in order to customize their post
// ie Button, Checkbox, Username, Post Content, Status(Working on JavaScript)?
Post.init(
    {
        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        }
    },
    {
        hooks : {
            afterCreate: async (newPostData) => {
                try {
                    newPostData = await NewPost.create({
                        user_id: newPostData.client_id,
                        ticket_id: newPostData.id,
                        log_text: 'Here is a new post!'
                    })

                }
                catch (err) {
                    console.log(err)
                }

                return newLogData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
