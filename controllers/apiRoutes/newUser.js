const router = require('express').Router();

// POST calls to /api/signUp
router.post('/', async (req, res) => {
    console.log(req.body);

    res.json("ok");
});

module.exports = router;