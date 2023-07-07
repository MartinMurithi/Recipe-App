import React from "react";
import "./CreateRecipe.css";

function CreateRecipe() {
  return (
    <div className="addRecipeSection">
      <h3 className="pageIntro">
        Create Your <span className="pageIntroRecipe">Recipe</span>
      </h3>
      <section className="instructionsSection">
        <p className="instructionTitle">
          To create a user-friendly recipe, please follow these guidelines:
        </p>
        <ul className="instructions">
          <li className="instruction">
            Choose a concise and descriptive name for your recipe.
          </li>
          <li className="instruction">
            Select the appropriate meal type: breakfast, lunch, dinner, or
            party.
          </li>
          <li className="instruction">
            Provide a breif description about the recipe and end product
          </li>
          <li className="instruction">
            If you have more ingredients, use the "Add Ingredient" button to
            include additional inputs.
          </li>
          <li className="instruction">
            Specify the preparation and cooking time in minutes or hours.[eg 2
            hours ]
          </li>
          <li className="instruction">
            Provide a title for each instruction in the recipe.
          </li>
          <li className="instruction">
            Include a URL link for the recipe image.
          </li>

          <li className="instruction">
            Indicate the number of servings the recipe will yield.[ eg 3
            servings]
          </li>

          {/* <li className="instruction">
            By adhering to these instructions, you can ensure that your recipe
            will be easy to follow and understand.
          </li> */}
        </ul>
      </section>

      <section className="recipeInputSection">
        <form action="" method="post">
          <label htmlFor="recipeName" className="recipeInputs">
            Name
          </label>
          <input
            type="text"
            required
            name="title"
            placeholder="e.g Grilled chicken"
            id="recipeName"
            className="recipeInput"
          />
          <label htmlFor="recipeDescription" className="recipeInputs">
            Description
          </label>
          <textarea
            name="description"
            id="recipeDesc"
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="mealType">Meal Type</label>
          <select name="mealType" id="mealTypeSelect">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="party">Party</option>
            <option value="wine">Wine</option>
          </select>
          <label htmlFor="time" className="recipeInputs">
            Total Time Taken
          </label>
          <input
            type="text"
            placeholder="E.g 3 hours"
            required
            name="time"
            className="recipeInput"
          />
          <label htmlFor="ingridients" className="recipeInputs">
            Ingridients
          </label>
          <input
            type="text"
            placeholder="eggs"
            required
            name="recipe"
            className="recipeInput"
          />
          <input
            type="text"
            placeholder="water"
            required
            name="recipe"
            className="recipeInput"
          />
          <button className="newInput">Add Ingridient</button>

          <label htmlFor="instructions" className="recipeInputs">Instructions</label>
          <textarea name="instructions" id="instructions" cols="30" rows="10"></textarea>

          <label htmlFor="servings" className="recipeInputs">Servings</label>
          <input type="number" name="servings" id="servings" required />

          <label htmlFor="imgURL" className="recipeInputs">Image URL</label>
          <input type="url" name="imageURL" id="imgUrl" />
          <button className="submitRecipeBtn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default CreateRecipe;
