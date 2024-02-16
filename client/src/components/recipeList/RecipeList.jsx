import React from "react";
import { Link } from "react-router-dom";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import Spinner from "../spinner/Spinner";
import "./RecipeList.css";

function RecipeList() {
  
   const {
    isLoading,
    isFetching,
    isError,
    error,
    isSuccess,
    data: recipes,
  } = useGetRecipesQuery();

  return (
    <div className="recipeListSection">
      {isFetching && isLoading && <Spinner />}
      {isError && <p>{error.message}</p>}
      {isSuccess && recipes.length !== 0
        ? recipes?.data?.map((recipe) => {
            return (
              <div key={recipe._id} className="recipeList ">
                <Link to={`/recipe/${recipe._id}`} className="recipeListLink">
                  <img
                    src={recipe.imageURL}
                    alt={recipe.title}
                    width={"260"}
                    height={"180"}
                    className="recipeImg"
                  />
                  <p className="recipeTitle">{recipe.title}</p>
                  {/* <p className="chef">by Chef</p> */}
                </Link>
              </div>
            );
          })
        : <p>No recipes available at the moment</p>}
    </div>
  );
}

export default RecipeList;
