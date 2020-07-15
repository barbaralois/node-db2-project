exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.string('VIN', 17).unique().notNullable();
    tbl.text('Make', 30).notNullable();
    tbl.text('Model', 30).notNullable();
    tbl.integer('Mileage').notNullable();
    tbl.text('Title Status');
    tbl.text('Transmission Type');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
