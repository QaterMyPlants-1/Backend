const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./authModel');
const validateUser = require('./validateUser');
const generateToken = require('./generateToken');

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

router.post('/login', validateUser, (req, res) => {
    let { username, password } = req.body;

    Users.find({ username })
        .first()
        .then(user => {
            console.log(user);
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                console.log(token);
                res.status(200).json({ message: `Welcome ${user.username}!`, user, token });
            } else {
                res.status(401).json({ message: 'Invalid Credentials'})
            }
        })
        .catch(error => {
            res.status(403).json({ message: 'Invalid Credentials', error });
            console.log(error);
        });
});

module.exports = router;