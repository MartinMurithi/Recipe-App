const { v4: uuid } = require("uuid");
const recipeModel = require("../models/recipeModel");
const mongoose = require("mongoose");

// create a recipe
const postRecipe = async (req, res) => {
  try {
    const id = uuid();
    const data = await recipeModel.create({id: id, ...req.body});
    res.status(201).json(req.body);
  } catch (err) {
    res.json({ success: false, error: err.status, message: err.message });
  }
};

// Fetch all recipes
const recipes = async (req, res) => {
  try {
    const data = await recipeModel.find({}).sort({createdAt: - 1});
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.json({ success: false, error: err.status, message: err.message });
  }
};

// Fetch one recipe
const recipe = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Recipe with id ${_id} does not exist`);
    const data = await recipeModel.findById(_id);
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.json({ success: false, error: err.status, message: err.message });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({ success: true, data: data });
  } catch (err) {
    recipe.json({ success: false, error: err.status, message: err.message });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findByIdAndDelete({ _id: id });
    res.status(200).json(data);
  } catch (err) {
    res.json({ success: false, error: err.status, message: err.message });
  }
};

// search for a recipe
const searchRecipe = async (req, res) => {
  try {
    const { query } = req.query;
    let sortedRecipes = await recipeModel.find({}).sort({createdAt : -1});
    if (query) {
      sortedRecipes = sortedRecipes.filter((recipe) => {
        return recipe.title.includes(query);
      });
    }
    if (sortedRecipes.length < 1) {
      return res.status(200).json({ success: true, data: [] });
    }
    return res.status(200).json({ success: true, data: sortedRecipes });
  } catch (err) {
    res.json({ success: false, error: err.status, message: err.message });
  }
};

module.exports = {
  postRecipe,
  recipes,
  recipe,
  updateRecipe,
  deleteRecipe,
  searchRecipe,
};
