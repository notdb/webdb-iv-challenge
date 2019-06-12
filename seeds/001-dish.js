// generate dish table names

exports.seed = function(knex, Promise) {
  return knex("dish").insert([
    { dish: "tacos" },
    { dish: "pizza" },
    { dish: "grapes" }
  ]);
};
