import React from "react";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import "./Category.css";

function Category() {
  const { data: recipes } = useGetRecipesQuery();
  let categories = new Set();
  if (recipes?.length !== 0) {
    recipes?.data?.forEach((recipe) => {
      categories.add(recipe.mealType);
    });
  }

  let categoryArr = Array.from(categories);

  return (
    <div className="categorySection">
      {categoryArr.length !== 0 &&
        categoryArr?.map((category, index) => {
          return (
            <button key={index} className="categoryBtn">
              {category}
            </button>
          );
        })}
    </div>
  );
}

export default Category;
