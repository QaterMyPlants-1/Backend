const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./authModel');
const validateUser = require('./validateUser');

const router = express.Router();

router.post('/register', validateUser, (req, res) => {
    const user = req.body;
    const rounds = process.env.ROUNDS || 12;
    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.create(user)
        .then(([id]) => {
            res.status(200).json({ message: 'Succesfully created user!', user_id: id });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error creating user', err });
        });
});

module.exports = router;