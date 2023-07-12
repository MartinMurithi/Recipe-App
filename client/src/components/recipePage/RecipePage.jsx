import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGetRecipeQuery } from "../../features/api/apiSlice";
function RecipePage() {
  const { _id } = useParams();

  const { isLoading, isSuccess, isError, error, data: recipe } = useGetRecipeQuery(_id);

  if (isSuccess) {
    console.log(recipe);
  }
  
  return (
    <div className="recipePage">
      <div className="recipeImg_recipeDetails">
        <h1>RECIPE IMAGE</h1>
        <div className="recipeDetails">
          <p className="title">Recipe name</p>
          <p className="recipeDescription">Description</p>
          <p>meal type, total time, yield</p>
          <div className="utils">
            <p>Created by Chef</p>
            <p>save</p>
            <p>print</p>
          </div>
        </div>
      </div>

      <div className="recipeData">
        <p>Instructions</p>
        <p>Ingridients</p>
      </div>
    </div>
  );
}

export default RecipePage;
