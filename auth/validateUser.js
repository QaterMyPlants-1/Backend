function validateUser (req, res, next) {
    if(req.body.username && req.body.password) {
        next();
    } else {
        res.status(400).json({ message: 'Must provide username and password. Phone number is optional.' });
    }
}
module.exports = validateUser;