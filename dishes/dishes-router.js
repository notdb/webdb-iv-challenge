const knex = require("knex");
const router = require("express").Router();

const Dishes = require("./dishes-model.js");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const [id] = await Dishes.add(req.body, "id");
    const dishes = await db("dish")
      .where({ id })
      .first();
    res.status(201).json(dishes);
  } catch (error) {
    const message = error[error.errno] || "We ran into an error";
    res.status(500).json({ message, error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dishes = await Dishes.getDish2(req.params.id);
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
