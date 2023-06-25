const express = require("express");
const router = express.Router();
const { recipes, recipe, postRecipe, updateRecipe, deleteRecipe, searchRecipe } = require("../controllers/recipeController");

router.get("/kocima.com/api/recipes", recipes);
router.get("/kocima.com/api/recipe/:id", recipe);
router.post("/kocima.com/api/createRecipe", postRecipe);
router.put("/kocima.com/api/updateRecipe/:id", updateRecipe);
router.delete("/kocima.com/api/deleteRecipe/:id", deleteRecipe);
router.get("/kocima.com/api/query", searchRecipe);

module.exports = router;