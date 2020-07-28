const express = require('express');

const Plants = require('./plantsModel');
const authentication = require('../auth/authenticationMiddleware');

const router = express.Router();

router.get('/', authentication, (req, res) => {
    Plants.findAll()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error connecting to database.', error });
        })
});

router.post('/', authentication, (req, res) => {
    const plant = req.body;
    console.log(req.decodedToken.subject.id);
    Plants.create({...plant, user_id: req.decodedToken.subject.id })
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error);
        }); 
});


module.exports = router;