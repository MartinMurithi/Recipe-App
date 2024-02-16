import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateRecipeMutation } from "../../features/api/apiSlice";
import "./CreateRecipe.css";

function CreateRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    mealType: "",
    ingridients: "",
    instructions: "",
    servings: 0,
    totalTime: 0,
    imageURL: "",
  });

  const [createHandler, { isLoading, isSuccess, isError, error }] =
    useCreateRecipeMutation();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHandler(recipe);

      navigate("/");
      toast.success("Recipe added successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setRecipe({
        title: "",
        description: "",
        mealType: "",
        ingridients: "",
        instructions: "",
        servings: 0,
        totalTime: 0,
        imageURL: "",
      });
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="addRecipeSection">
      <h3 className="pageIntro">
        Create Your <span className="pageIntroRecipe">Recipe</span>
      </h3>
      <section className="instructionsSection">
        <p className="instructionTitle">
          To create a user-friendly recipe, please follow these guidelines:
        </p>
        <ol className="instructions">
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
        </ol>
      </section>

      <section className="recipeInputSection">
        <form className="recipeForm" onSubmit={onHandleSubmit}>
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
            value={recipe.title}
            className="recipeInput"
            onChange={(e) =>
              setRecipe({ ...recipe, title: e.target.value.toLowerCase() })
            }
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
            value={recipe.description}
            id="recipeDesc"
            className="recipeInput"
            cols="30"
            rows="10"
            onChange={(e) =>
              setRecipe({ ...recipe, description: e.target.value })
            }
          ></textarea>
          <label htmlFor="mealType" className="recipeLabels">
            Meal type
          </label>
          <select
            name="mealType"
            value={recipe.mealType}
            id="mealTypeSelect"
            className="recipeInput"
            onChange={(e) => setRecipe({ ...recipe, mealType: e.target.value })}
          >
            <option value="">-----</option>
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
            type="number"
            placeholder="E.g 3 hours"
            required
            value={recipe.totalTime}
            name="totalTime"
            className="recipeInput"
            id="timeInput"
            onChange={(e) =>
              setRecipe({ ...recipe, totalTime: e.target.value })
            }
          />
          <label
            htmlFor="ingridients"
            className="recipeLabels
          "
          >
            Ingridients
          </label>
          <textarea
            name="ingridients"
            id="ingridients"
            value={recipe.ingridients}
            className="recipeInput"
            cols="30"
            rows="10"
            onChange={(e) =>
              setRecipe({ ...recipe, ingridients: e.target.value })
            }
          ></textarea>

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
            value={recipe.instructions}
            className="recipeInput"
            cols="30"
            rows="15"
            onChange={(e) =>
              setRecipe({ ...recipe, instructions: e.target.value })
            }
          ></textarea>

          <label
            htmlFor="servings"
            className="recipeLabels
          "
          >
            Servings
          </label>
          <input
            type="number"
            name="servings"
            value={recipe.servings}
            id="servingsInput"
            className="recipeInput"
            required
            onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
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
            value={recipe.imageURL}
            id="imgUrl"
            className="recipeInput"
            onChange={(e) => setRecipe({ ...recipe, imageURL: e.target.value })}
          />
          {isError ? <p>{error.message}</p> : null}
          <button className="submitRecipeBtn">
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default CreateRecipe;
