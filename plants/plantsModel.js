const db = require('../data/dbConfig');

module.exports = {
    findAll,
    findById,
    create,
    remove,
    update
}

function findAll() {
    return db('plants');
}

function findById(id) {
    return db('plants').where({ id });
}

function create(plant) {
    return db('plants').insert(plant)
        .then(([id]) => {
            return findById(id);
        });
};

function update(changes, id) {
    return db('plants').where({ id }).update(changes)
}
function remove(id) {
    return db('plants').del({ id });
}