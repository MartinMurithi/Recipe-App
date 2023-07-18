import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from "../logo/Logo";

function Nav() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    setShowNavBar((current) => !current);
  };

  return (
    <>
      <nav>
        <div className="leftSide">
          <Logo />
          <div className="navLinks">
            <NavLink to={"/"} className={"navLink"}>
              Home
            </NavLink>
            <NavLink to={"/search"} className={"navLink"}>
              Search
            </NavLink>
            <NavLink to={"/addRecipe"} className={"navLink"}>
              Create Recipe
            </NavLink>
            <NavLink to={"/savedRecipes"} className={"navLink"}>
              Saved Recipes
            </NavLink>
            <NavLink to={"/contacts"} className={"navLink"}>
              Contact
            </NavLink>
          </div>
        </div>

        <div className="rightSide">
           <NavLink to={"/signIn"} className={"navLink"} id="signInLink" >
            Sign In
          </NavLink>
          <NavLink to={"/signUp"} className={"navLink"} id="signUpLink">
            Sign In
          </NavLink>
          <span
            className="material-icons-outlined"
            id="menuIcon"
            onClick={handleShowNavBar}
          >
            {showNavBar ? "X" : "menu"}
          </span>
        </div>
      </nav>
      <div className="parentModal">
        <div
          className="modalNavBar"
          id={showNavBar ? "modalNavBar" : "closeModalNavBar"}
        >
          <NavLink to={"/"} className={"navLink"}>
            Home
          </NavLink>
          <NavLink to={"/search"} className={"navLink"}>
            Search
          </NavLink>
          <NavLink to={"/addRecipe"} className={"navLink"}>
            Create Recipe
          </NavLink>
          <NavLink to={"/savedRecipes"} className={"navLink"}>
            Saved Recipes
          </NavLink>
          <NavLink to={"/contacts"} className={"navLink"}>
            Contact
          </NavLink>
          <NavLink to={"/signIn"} className={"navLink"} id="signInLink">
            Sign In
          </NavLink>
          <NavLink to={"/signUp"} className={"navLink"} id="signUpLink">
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
