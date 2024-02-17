import React, { useState } from "react";
import { useSearchRecipeQuery } from "../../features/api/apiSlice";
import "./SearchData.css";
import RecipeList from "./RecipeList";
import RecipeCard from "../recipe card/RecipeCard";

function SearchBar() {
  const [query, setQuery] = useState("");
  const {
    isError,
    error,
    isSuccess,
    data: recipe,
    refetch,
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
      <div className="recipeListSection">
        {isError && <h5>{error.message}</h5>}
        {isSuccess && recipe.length !== 0 ? (
          recipe?.data?.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe._id} />;
          })
        ) : (
          <RecipeList />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
