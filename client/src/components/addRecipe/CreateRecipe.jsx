import React, { useState } from "react";
import "./CreateRecipe.css";
import axios from "axios";

function CreateRecipe() {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mealType, setMealType] = useState("");
  const [ingridients, setIngridients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [servings, setServings] = useState(0);
  const [totalTime, setTime] = useState(0);
  const [imageURL, setUrl] = useState("");

  const createRecipe = async (e) => {
    try {
      e.preventDefault();
      const obj = await axios.post("http://localhost:8080/kocima.com/api/createRecipe", {
        title,
        description,
        mealType,
        ingridients,
        instructions,
        servings,
        totalTime,
        imageURL,
      });
      console.log(obj);
    } catch (err) {
      console.log(err);
    }
  };
        console.log(title, imageURL, servings, mealType);


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

          <li className="instruction">
            By adhering to these instructions, you can ensure that your recipe
            will be easy to follow and understand.
          </li>
        </ul>
      </section>

      <section className="recipeInputSection">
        <form onSubmit={createRecipe} className="recipeForm">
          <label
            htmlFor="recipeName"
            className="recipeLabels
          "
          >
            Recipe name
          </label>
          <input
            type="text"
            required
            name="title"
            placeholder="e.g Grilled chicken"
            id="recipeName"
            className="recipeInput"
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="recipeDescription"
            className="recipeLabels
          "
          >
            Description
          </label>
          <textarea
            name="description"
            id="recipeDesc"
            className="recipeInput"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="mealType" className="recipeLabels">
            Meal type
          </label>
          <select
            name="mealType"
            id="mealTypeSelect"
            className="recipeInput"
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="party">Party</option>
            <option value="wine">Wine</option>
          </select>
          <label
            htmlFor="time"
            className="recipeLabels
          "
          >
            Total time taken
          </label>
          <input
            type="text"
            placeholder="E.g 3 hours"
            required
            name="totalTime"
            className="recipeInput"
            id="timeInput"
            onChange={(e) => setTime(e.target.value)}
          />
          <label
            htmlFor="ingridients"
            className="recipeLabels
          "
          >
            Ingridients
          </label>
          <input
            type="text"
            placeholder="eggs"
            required
            name="ingridients"
            className="recipeInput"
            id="ingridientsInput"
            onChange={(e) => setIngridients(e.target.value)}
          />
          <input
            type="text"
            placeholder="water"
            required
            name="ingridients"
            id="ingridientsInput"
            className="recipeInput"
            onChange={(e) => setIngridients(e.target.value)}
          />
          <button className="newInput">Add Ingridient</button>

          <label
            htmlFor="instructions"
            className="recipeLabels
          "
          >
            Instructions
          </label>
          <textarea
            name="instructions"
            id="instructions"
            className="recipeInput"
            cols="30"
            rows="10"
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>

          <label
            htmlFor="servings"
            className="recipeLabels
          "
          >
            Servings
          </label>
          <input
            type="text"
            name="servings"
            id="servingsInput"
            className="recipeInput"
            required
            onChange={(e) => setServings(e.target.value)}
          />

          <label
            htmlFor="imgURL"
            className="recipeLabels
          "
          >
            Image URL
          </label>
          <input
            type="url"
            name="imageURL"
            id="imgUrl"
            className="recipeInput"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="submitRecipeBtn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default CreateRecipe;
