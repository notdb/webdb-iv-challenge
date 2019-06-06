exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("ingredients_recipes").insert([
    { recipe_id: 1, ingredient_id: 1, ingredient_amount: 15 },
    { recipe_id: 1, ingredient_id: 4, ingredient_amount: 2 },
    { recipe_id: 1, ingredient_id: 5, ingredient_amount: 20 }
  ]);
};
