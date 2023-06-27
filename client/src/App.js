import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import Contacts from "./pages/Contacts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import RecipeItem from './components/recipeItem/RecipeItem';
function App() {


  return (
    <div className="App">
      <Nav />
      <RecipeItem/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/addRecipe' element={<AddRecipe/> } />
        <Route path='/contacts' element={<Contacts/> } />
        <Route path='/signUp' element={<SignUp/> } />
        <Route path='/signIn' element={<SignIn/> } />
    </Routes>
    </div>
  );
}

export default App;
