const db = require('../data/dbConfig');

module.exports = {
    findAll,
    findById,
    remove,
    update
}

function findAll() {
    return db('users');
}

function findById(id) {
    return db('users').where({ id }).first();
}

function update(changes, id) {
    return db('users').where({ id }).update(changes)
        .then(response => {
            return findById(id);
        })
}
function remove(id) {
    return db('users').where({ id }).del();
};