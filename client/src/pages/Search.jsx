import React from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Footer from '../components/footer/Footer';
import RecipeList from '../components/recipeList/RecipeList';

function Search() {
  return (
    <div>
      <SearchBar />
      <RecipeList/>
      <Footer/>
    </div>
  )
}

export default Search;