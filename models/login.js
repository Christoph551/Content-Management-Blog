const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Login extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

Login.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
            },
        },
    },
        {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'login',
            sequelize
        },
        {
            hooks: {
                // set up beforeCreate lifecycle "hook" functionality
                async beforeCreate(newUserData) {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                },
    
                async beforeUpdate(updatedUserData) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                    return updatedUserData;
                }
            }
        },
    );

module.exports = Login;