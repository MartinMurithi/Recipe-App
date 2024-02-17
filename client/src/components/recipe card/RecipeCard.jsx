import React from "react";
import { Link } from "react-router-dom";
import "../recipeList/RecipeList.css";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div>
      <Link to={`/recipe/${recipe._id}`} className="recipeListLink">
        <div className="imageCard">
          <img
            src={recipe.imageURL}
            alt={recipe.title}
            width="260px"
            height="180px"
            className="recipeImg"
          />
          <p className="recipeTitle">{recipe.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
