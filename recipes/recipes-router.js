const knex = require("knex");
const router = require("express").Router();

const Recipes = require("./recipes-model.js");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes2();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const [id] = await Recipes.addRecipes(req.body, "id");
    const recipes = await db("recipes")
      .where({ id })
      .first();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipeDish4(req.params.id);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
