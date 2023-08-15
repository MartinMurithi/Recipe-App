import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchRecipeQuery } from "../../features/api/apiSlice";
import "./SearchData.css";
import RecipeList from "../recipeList/RecipeList";

function SearchBar() {
  const [query, setQuery] = useState("");
  const {
    isError,
    error,
    isSuccess,
    data: recipe,
    refetch
  } = useSearchRecipeQuery(query, { enabled: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="search_sort">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for recipes..."
          className="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </form>

      {/* Search results data */}
      <div className="searchData">
        {isError && <h5>{error.message}</h5>}
        {isSuccess && recipe.length !== 0 ? (
          recipe?.data?.map((recipe) => {
            return (
              <div key={recipe._id} className="searchRecipeList">
                <Link to={`/recipe/${recipe._id}`} className="recipeListLink">
                  <img
                    src={recipe.imageURL}
                    alt={recipe.title}
                    width={"260"}
                    height={"150"}
                    className="recipeImg"
                  />
                  <p className="recipeTitle">{recipe.title}</p>
                  <p className="chef">by Chef</p>
                </Link>
              </div>
            );
          })
        ) : (
          <RecipeList />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
