import React from 'react'
import HeaderSection from '../components/header/HeaderSection';
import SearchBar from '../components/searchBar/SearchBar';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';
import RecipeList from '../components/recipeList/RecipeList';

function Home() {
  return (
    <div>
      <HeaderSection />
      <SearchBar />
      <RecipeList/>
      <Subscription />
      <Footer/>
    </div>
  )
}

export default Home