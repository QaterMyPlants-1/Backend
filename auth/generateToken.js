function generateToken(user) {
    const payload = {
        subject: user,
    };
    const secret = process.env.JWT_SECRET || 'Secret formula';
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = generateToken;