import React from "react";
import { useGetRecipesQuery } from "../../features/api/apiSlice";
import "./Category.css";

function Category({handleFilter}) {
  const { data: recipes } = useGetRecipesQuery();
  let categories = new Set();
  categories.add('All');
  if (recipes?.length !== 0) {
    recipes?.data?.forEach((recipe) => {
      categories.add(recipe.mealType);
    });
  }

  const categoryArr = Array.from(categories);

  return (
    <div className="categorySection">
      {categoryArr.length !== 0 &&
        categoryArr?.map((category, index) => {
          return (
            <button
              key={index}
              className="categoryBtn"
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          );
        })}
    </div>
  );
}

export default Category;
