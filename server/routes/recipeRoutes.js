const express = require("express");
const router = express.Router();
const { recipes, recipe, postRecipe, updateRecipe, deleteRecipe, searchRecipe } = require("../controllers/recipeController");

router.get("/kocima.com/api/v1/recipes", recipes);
router.get("/kocima.com/api/v1/recipe/:id", recipe);
router.post("/kocima.com/api/v1/createRecipe", postRecipe);
router.put("/kocima.com/api/v1/updateRecipe/:id", updateRecipe);
router.delete("/kocima.com/api/v1/deleteRecipe/:id", deleteRecipe);
router.get("/kocima.com/api/v1/search", searchRecipe);

module.exports = router;