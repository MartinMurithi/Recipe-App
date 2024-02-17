import React from "react";
import { Link } from "react-router-dom";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import Spinner from "../spinner/Spinner";
import "./RecipeList.css";
import RecipeCard from "../recipe card/RecipeCard";

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
      {isSuccess && recipes.length !== 0 ? (
        recipes?.data?.map((recipe) => {
          return (
            <RecipeCard recipe={recipe} key={recipe._id} />
          );
        })
      ) : (
        null
      )}
    </div>
  );
}

export default RecipeList;
