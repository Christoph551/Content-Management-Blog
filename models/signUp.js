const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class signUp extends Model { 
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

signUp.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
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
        // hooks: {
        //     beforeCreate: async (newUser) => {
        //         newUser.password = await bcrypt.hash(newUser.password, 10);
        //         return newUser;
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'signUp'
    }
);

module.exports = signUp;