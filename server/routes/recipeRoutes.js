const Router= require("express")
const router = Router();
const controller = require("../controllers/recipeController");

// router.get("/kocima.com/api/v1/recipes", async (request, response) => {
//   try {
//     // console.log("Req:", req);
//     console.log("Res:", response.json());
//     const data = await recipeModel.find({}).sort({ createdAt: -1 });
//     console.log(data);
//     return response.status(200).json({ success: true, data: data });
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     return response
//       .status(500)
//       .json({ success: false, error: err.status, message: err.message });
//   }
// });

// console.log(response);
router.get("/recipes", controller.recipes);
router.get("/recipe/:id", controller.recipe);
router.post("/add-recipe", controller.postRecipe);
// router.delete("/deleteRecipe/:id", controller.deleteRecipe);
router.get("/search", controller.searchRecipe);

module.exports = router;