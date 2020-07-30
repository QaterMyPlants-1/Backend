const db = require('../data/dbConfig');

module.exports = {
    findAll,
    findByUserId,
    create,
    remove,
    update
}

function findAll() {
    return db('plants');
}

function findByUserId(id) {
    return db('plants').where({ "user_id": id });
}

function findById(id) {
    return db('plants').where({ id });
}

function create(plant) {
    return db('plants').insert(plant)
        .then(([id]) => {
            return findById(id).first();
        });
};

function update(changes, id) {
    return db('plants').where({ id }).update(changes)
        .then(response => {
            return findById(id);
        })
}
function remove(id) {
    return db('plants').del({ id })
        .then(response => {
            return findAll();
        });
};