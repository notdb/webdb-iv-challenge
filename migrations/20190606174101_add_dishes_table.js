exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", function(table) {
    table.increments();
    table.string("dish", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
