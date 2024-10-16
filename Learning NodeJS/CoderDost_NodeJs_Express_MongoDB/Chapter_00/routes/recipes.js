const express = require("express");
const router = express.Router();
const recipesController = require("../controller/recipesController");

router
  .route("/")
  .get(recipesController.getAllRecipes)
  .post(recipesController.addRecipe);

router
  .route("/:id")
  .get(recipesController.getRecipe)
  .put(recipesController.updateRecipe)
  .delete(recipesController.deleteRecipe);

module.exports = router;
