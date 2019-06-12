const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  add,
  getDish,
  getRecipe,
  getDish2
};

function getDishes() {
  return db("dish");
}

function add(dish) {
  return getDishes().insert(dish);
}

function getDish(id) {
  return db("dish")
    .select(["*"])
    .from("dish")
    .where("dish.id", "=", id)
    .first();
}

function getRecipe(id) {
  return db("recipes")
    .select("recipes.recipename")
    .from("recipes")
    .where("recipes.dish_id", "=", id);
}

async function getDish2(id) {
  let a = await getDish(id);
  let b = await getRecipe(id);
  return {
    ...a,
    recipes: b
  };
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
