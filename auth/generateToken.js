const jwt = require('jsonwebtoken');
const jwtSecret = require('../secrets/authSecret');

function generateToken(user) {
    const payload = {
        subject: user,
    };
    const secret = jwtSecret ;
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = generateToken;