const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipes,
  getRecipes2
};

function getRecipes() {
  return db("recipes");
}

function addRecipes(recipes) {
  return getRecipes().insert(recipes);
}

function getRecipes2() {
  return db
    .select(["recipes.recipename", "dish.dish"])
    .from("recipes")
    .join("dish", "dish.id", "recipes.dish_id");
}

/*
select dish.dish, recipes.recipename as recipes
from dish
join recipes
on dish.id = recipes.dish_id


async function {
await
await
return 
spred function

*/
