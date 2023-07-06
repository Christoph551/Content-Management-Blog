const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        sequelize
    }
);

// Hooks should be defined outside the options object
User.addHook('beforeCreate', async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
});

User.addHook('beforeUpdate', async (updatedUserData) => {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
});

module.exports = User;
