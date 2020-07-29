const express = require('express');

const Plants = require('./plantsModel');
const authentication = require('../auth/authenticationMiddleware');

const router = express.Router();

router.use(authentication);

router.get('/', (req, res) => {
    Plants.findAll()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error connecting to database.', error });
        })
});

router.post('/', (req, res) => {
    const plant = req.body;
    Plants.create({ ...plant, user_id: req.decodedToken.subject.id })
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error connecting to database ', error });
        }); 
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    Plants.update(changes, id)
        .then(response => {
            res.status(200).json(response[0]);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error updating plant.', error })
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.body;

    Plants.remove(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({ message: 'Error deleting plant.', error })
    });
});


module.exports = router;