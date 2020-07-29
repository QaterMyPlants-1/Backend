
exports.up = function(knex) {
    return knex.schema.table('plants', tbl => {
        tbl.text('h2oFrequency');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plants');
};
