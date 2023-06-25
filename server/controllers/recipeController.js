const recipeModel = require("../models/recipeModel");

const postRecipe = async (req, res) => {
  try {
    const data = await recipeModel.create(req.body);
    console.log(data);
    res.status(201).json(req.body);
  } catch (err) {
    console.error(err);
  }
};

// Fetch all recipes
const recipes = async (req, res) => {
  try {
    const data = await recipeModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.json(err);
  }
};

// Fetch one recipe
const recipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findOne({ _id: id });
    res.status(200).json(data);
  } catch (err) {
    res.json(err);
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json(data);
  } catch (err) {
    recipe.json(err);
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await recipeModel.findByIdAndDelete({ _id: id });
        res.status(200).json(data);
    } catch (err) {
        res.json(err);
    }
}

module.exports = { postRecipe, recipes, recipe, updateRecipe, deleteRecipe };
