
exports.up = function(knex) {
    return knex.schema.table('plants', tbl => {
        tbl.text('image');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plants');
};
