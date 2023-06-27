import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search_sort">
      <form className="searchForm">
        <input
          type="search"
          placeholder="Search for recipes..."
          className="searchInput"
        />
          </form>
          
          <div className="dropDown">
              <label htmlFor="recipe">Sort by : </label>
              <select name="recipe" id="recipes">
                  <option value="latest">Latest</option>
                  <option value="likes">Most liked</option>
                  <option value="save">Most saved</option>
              </select>
          </div>
    </div>
  );
}

export default SearchBar;
