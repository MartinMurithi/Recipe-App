import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useGetRecipesQuery } from "../../features/api/apiSlice";

function RecipeList() {
  const {
    data: recipes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRecipesQuery();

  console.log(recipes);

  return (
    <div>
      {isLoading && <InfinitySpin />}
      {isError && <p>{error.message}</p>}
      
      {isSuccess && (
        recipes?.length > 0 ? (
          recipes.map((recipe) => {
            return (
              <div key={recipe._id}>
                <p>{recipe._id}</p>
                <p>{recipe.title}</p>
                <p>{recipe.instructions}</p>
              </div>
            );
          })
        ) : (
          <p>No posts available</p>
        ))
      }

    </div>
  );
}

export default RecipeList;
