import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import AddRecipe from "./pages/AddRecipe";
import Contacts from "./pages/Contacts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Search from './pages/Search';
import RecipePage from './components/recipePage/RecipePage';
import { ToastContainer } from "react-toastify";
function App() {
  // SIGN UP AND SIGN FORM USE THE SAME CSS
  return (
    <div className="App">
      <Nav />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:_id' element={<RecipePage/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/addRecipe' element={<AddRecipe/> } />
        <Route path='/contacts' element={<Contacts/> } />
        <Route path='/signUp' element={<SignUp/> } />
        <Route path='/signIn' element={<SignIn/> } />
      </Routes>
    </div>
  );
}

export default App;
