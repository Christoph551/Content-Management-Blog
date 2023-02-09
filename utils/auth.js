const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
        res.redirect('/login'); // @@TODO: Have not yet set up login page
    } else {
        next();
    }
};

module.exports = withAuth;