const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipes,
  getRecipes2,
  getRecipeDish,
  getRecipeDish2,
  getRecipeDish3,
  getRecipeDish4
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

async function getRecipeDish4(id) {
  let a = await getRecipeDish(id);
  let b = await getRecipeDish2(id);
  let c = await getRecipeDish3(id);
  return {
    ...a,
    ...b,
    ingredients: c
  };
}

function getRecipeDish(id) {
  return db("dish")
    .select(["dish.dish"])
    .from("dish")
    .where("dish.id", "=", id)
    .first();
}

function getRecipeDish2(id) {
  return db("recipes")
    .select(["recipes.recipename"])
    .from("recipes")
    .where("recipes.id", "=", id)
    .first();
}

function getRecipeDish3(id) {
  return db
    .select(["ingredients.ingredientname"])
    .from("recipes")
    .join(
      "ingredients",
      "ingredients.id",
      "=",
      "ingredients_recipes.ingredient_id"
    )
    .join(
      "ingredients_recipes",
      "ingredients_recipes.recipe_id",
      "=",
      "recipes.id"
    )
    .where("ingredients_recipes.recipe_id", "=", id);
}

function getRecipeIngredientId(id) {}

function getRecipeIngredientAmount(id) {}
