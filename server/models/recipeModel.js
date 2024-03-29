const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    totalTime: {
      type: Number,
      required: true,
    },
    ingridients: {
      type: String,
      required: [true, "The ingridients are required"],
    },
    instructions: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    mealType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const recipeModel = mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;
