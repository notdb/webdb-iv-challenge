exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { ingredientname: "cheese" },
    { ingredientname: "pepperoni" },
    { ingredientname: "beef" },
    { ingredientname: "taco_shells" },
    { ingredientname: "lettuce" },
    { ingredientname: "frozen_grapes" },
    { ingredientname: "fresh_grapes" },
    { ingredientname: "hot" },
    { ingredientname: "cold" }
  ]);
};
