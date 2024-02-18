import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipeCard">
      <Link to={`/recipe/${recipe._id}`} className="recipeLink">
        <div className="imageCard">
          <img
            src={recipe.imageURL}
            alt={recipe.title}
            width="240px"
            height="190px"
            className="recipeImg"
          />
        </div>
        <p className="recipeTitle">{recipe.title}</p>
      </Link>
    </div>
  );
}

export default RecipeCard;
