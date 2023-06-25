const e = require("express");
const recipeModel = require("../models/recipeModel");

const postRecipe = async (req, res) => {
  try {
    const data = await recipeModel.create(req.body);
    console.log(data);
    res.status(201).json(req.body);
  } catch (err) {
    res.json({success: false, message: err})
  }
};

// Fetch all recipes
const recipes = async (req, res) => {
  try {
    const data = await recipeModel.find();
    res.status(200).json({success:true, data: data});
  } catch (err) {
    res.json({success: false, message: err});
  }
};

// Fetch one recipe
const recipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findOne({ _id: id });
    res.status(200).json({success:true, data: data});
  } catch (err) {
    res.json({success: false, message: err});
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({success:true, data: data});
  } catch (err) {
    recipe.json({success: false, message: err});
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await recipeModel.findByIdAndDelete({ _id: id });
    res.status(200).json(data);
  } catch (err) {
    res.json({success: false, message: err});
  }
};

// search for a recipe
const searchRecipe = async (req, res) => {
  try {
    const { search } = req.query;
    let sortedRecipes = await recipeModel.find();
    if (search) {
      sortedRecipes = sortedRecipes.filter((recipe) => {
        return recipe.title.startsWith(search.toUpperCase());
      });
    }
    if (sortedRecipes.length < 1) {
      return res.status(200).json({ success: true, data: [] });
    }
    return res.status(200).json({ success: true, data: sortedRecipes });
  } catch (err) {
    res.json({success: false, message: err});
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
