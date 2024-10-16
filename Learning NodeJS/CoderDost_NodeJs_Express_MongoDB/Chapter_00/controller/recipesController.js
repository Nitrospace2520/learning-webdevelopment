const recipes = require("../model/recipes.json");
const path = require("path");
const fs = require("fs");

const getAllRecipes = (req, res) => {
  res.json(recipes);
};

const getRecipe = (req, res) => {
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

const addRecipe = (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const id = recipes[recipes.length - 1].id + 1 || 1;
  recipes.push({ id, name, ingredients, instructions });
  fs.writeFile(
    path.join(__dirname, "..", "model", "recipes.json"),
    JSON.stringify(recipes),
    (err) => {
      if (err) {
        res.status(500).send("Error");
      }
    }
  );
  res.status(201).json(recipes);
};

const updateRecipe = (req, res) => {
  const id = +req.params.id;
  const { name, ingredients, instructions } = req.body;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    recipe.name = name || recipe.name;
    recipe.ingredients = ingredients || recipe.ingredients;
    recipe.instructions = instructions || recipe.instructions;
    fs.writeFile(
      path.join(__dirname, "..", "model", "recipes.json"),
      JSON.stringify(recipes),
      (err) => {
        if (err) {
          res.status(500).send("Error");
        }
      }
    );
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

const deleteRecipe = (req, res) => {
  const id = +req.params.id;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);
    fs.writeFile(
      path.join(__dirname, "..", "model", "recipes.json"),
      JSON.stringify(recipes),
      (err) => {
        if (err) {
          res.status(500).send("Error");
        }
      }
    );
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

module.exports = {
  getAllRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
