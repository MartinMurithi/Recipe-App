import React, { useEffect, useState } from "react";
import { useSearchRecipeQuery } from "../../features/api/apiSlice";
import "./SearchData.css";
import Category from "../category/Category";
import RecipeCard from "../recipe card/RecipeCard";
import Spinner from "../spinner/Spinner";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const {
    isError,
    error,
    isSuccess,
    isLoading,
    data: recipes,
    refetch,
  } = useSearchRecipeQuery(query, { enabled: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  const handleFilter = (category) => {
    const results =
      category === "All"
        ? recipes?.data
        : recipes?.data?.filter((recipe) => recipe?.mealType === category);
    setFilteredRecipes(results);
  };

  useEffect(() => {
    if (recipes?.data) {
      setFilteredRecipes(recipes.data);
    }
  }, [recipes]);

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
      <Category handleFilter={handleFilter} />

      {/* Search results data */}
      <div className="recipeListSection">
        {isError && <h5>{error.message}</h5>}
        {isLoading && <Spinner />}
        {isSuccess && recipes?.length !== 0
          ? filteredRecipes?.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe._id} />
            ))
          : isSuccess &&
            recipes.length === 0 && <p>No recipes found for "{query}"</p>}
      </div>
    </div>
  );
}

export default SearchBar;
