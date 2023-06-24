const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingridients: {
      type: Array,
      required: true,
    },
    instruction: {
      type: Array,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const recipeModel = mongoose.model("recipes", recipeSchema);
module.exports = recipeModel;
