exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipename: "hot_tacos", dish_id: 1 },
    { recipename: "cold_tacos", dish_id: 1 },
    { recipename: "red_pizza", dish_id: 2 },
    { recipename: "cheese_pizza", dish_id: 2 },
    { recipename: "frozen_grapes", dish_id: 3 },
    { recipename: "fresh_grapes", dish_id: 3 }
  ]);
};
