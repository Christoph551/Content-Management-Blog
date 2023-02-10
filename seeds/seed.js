// function to create a new user
const createUser = async (email, password) => {
    const User = await User.create({ email, password });
    const token = createToken(user.id);
    return token;
};

// function to login a user
const loginUser = async (email, password) => {
    const User = await User.findOne({ where: { email } });
    if (!User) {
        throw new Error('No user with that email');
    }
    const validPassword = await bcrypt.compare(password, User.password);
    if (!validPassword) {
        throw new Error('Incorrect password');
    }
    const token = createToken(User.id);
    return token;
};

// function to create a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });
};

module.exports = {
    createUser,
    loginUser,
};