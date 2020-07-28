
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id');
        tbl.text('username', 128).unique().notNullable();
        tbl.text('password', 128).notNullable();
        tbl.integer('number');
    })
    .createTable('plants', tbl => {
        tbl.increments('id');
        tbl.text('name', 128).notNullable();
        tbl.text('species', 128).notNullable();
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('users');
};
