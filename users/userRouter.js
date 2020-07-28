const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./userModel');
const validateUser = require('../auth/validateUser');
const authentication = require('../auth/authenticationMiddleware');

const router = express.Router();

router.use(authentication);

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
        .then(user => {
            res.status(200).json({ user });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving user.'})
        });
});

router.put('/:id', validateUser, (req, res) => {
    const { id } = req.params;
    const userChanges = req.body;
    const rounds = process.env.ROUNDS || 12;
    const hash = bcrypt.hashSync(userChanges.password, rounds);

    userChanges.password = hash;
    Users.update(userChanges, id)
        .then(updatedUser => {
            res.status(200).json({ updatedUser })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error updating user.'})
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Error deleting user.', error })
    });
});

module.exports = router;