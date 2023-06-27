import React, { useEffect, useState } from 'react';
import "./RecipeItem.css";

function RecipeItem() {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/kocima.com/api/recipes");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className='recipeItem'>
    </div>
  )
}

export default RecipeItem