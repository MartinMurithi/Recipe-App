import React from "react";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import Spinner from "../spinner/Spinner";
import "./RecipeList.css";
import RecipeCard from "../recipe card/RecipeCard";

function RecipeList() {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: recipes,
  } = useGetRecipesQuery();

  return (
    <div className="recipeListSection">
      {isError && <p>{error.message}</p>}
      {isLoading && <Spinner />}
      {isSuccess && recipes.length !== 0
        ? recipes?.data?.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe._id} />;
          })
        : null}
    </div>
  );
}

export default RecipeList;
