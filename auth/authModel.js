const db = require('../data/dbConfig');

module.exports = {
    find,
    create,
    remove
}

function find(filter) {
    return db('users').where({ filter });
}

function create(user) {
    return db('users').insert(user);
}

function remove(id) {
    return db('users').del({ id });
}