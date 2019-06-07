exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients_recipes", function(table) {
    table.increments();

    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients");
    table.integer("ingredient_amount").notNullable();
    table.string("ingredient_size", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients_recipes");
};
