const express = require("express");
const router = express.Router();
const { recipes, recipe, postRecipe, updateRecipe, deleteRecipe } = require("../controllers/recipeController");

router.get("/kocima.com/recipes", recipes);
router.get("/kocima.com/recipe/:id", recipe);
router.post("/kocima.com/createRecipe", postRecipe);
router.put("/kocima.com/updateRecipe/:id", updateRecipe);
router.delete("/kocima.com/deleteRecipe/:id", deleteRecipe);

module.exports = router;