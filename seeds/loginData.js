const { User } = require('../models');

const userData = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@email.com",
        password: "password123"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@email.com",
        password: "password123"
    },
    {
        firstName: "Joe",
        lastName: "Doe",
        email: "joe@email.com",
        password: "password123"
    },
    {
        firstName: "Jill",
        lastName: "Doe",
        email: "jill@email.com",
        password: "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

