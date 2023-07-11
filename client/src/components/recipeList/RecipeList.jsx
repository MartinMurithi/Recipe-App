import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import "./RecipeList.css";

function RecipeList() {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: recipes,
  } = useGetRecipesQuery();

  // let data, newData;
  // let content = recipes?.data?.map((ingri) => {
  //   return (
  //     <>
  //       {data = ingri.instructions}
  //       {newData = data.split('\n').map((line, index) => {
  //         return <p key={index}>{line}<br/></p>
  //       })}
  //       {console.log(data)}
  //       {console.log(newData)}

  //     </>
  //   );
  // });

  return (
    <div className="recipeListSection">
      {isLoading && <InfinitySpin />}
      {isError && <p>{error.message}</p>}
      {isSuccess && recipes.length !== 0 ? (
        recipes?.data?.map((recipe) => {
          return (
            <div key={recipe._id} className="recipeList ">
              <Link to={`/recipe/${recipe._id}}`} className="recipeListLink">
                <img
                  src={recipe.imageURL}
                  alt={recipe.title}
                  width={"260"}
                  height={"150"}
                  className="recipeImg"
                />{" "}
                <p className="recipeTitle">{recipe.title}</p>
                <p className="chef">by Chef</p>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
}

export default RecipeList;
