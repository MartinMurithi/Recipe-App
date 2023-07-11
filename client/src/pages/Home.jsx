import React from 'react'
import HeaderSection from '../components/header/HeaderSection';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';
import RecipeList from '../components/recipeList/RecipeList';

function Home() {
  return (
    <div>
      <HeaderSection />
      <RecipeList/>
      <Subscription />
      <Footer/>
    </div>
  )
}

export default Home