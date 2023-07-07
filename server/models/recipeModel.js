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
    servings: {
      type: Number,
      required: true
    },
    totalTime: {
      type: Number,
      required: true
    },
    ingridients: {
      type: Array,
      required: [ true, "The ingridients are required" ]
    },
    instructions: {
      type: Array,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    mealType: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const recipeModel = mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;
