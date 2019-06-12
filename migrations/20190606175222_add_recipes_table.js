exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(table) {
    table.increments();

    table
      .string("recipename", 128)
      .notNullable()
      .unique();
    table
      .integer("dish_id")
      .notNullable()
      .references("id")
      .inTable("dish");
    table.string("recipeinstructions", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
