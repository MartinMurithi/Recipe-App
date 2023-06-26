import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="leftSide">
          <div>
            <NavLink to={"/"} className="logo">
              Kocima
            </NavLink>{" "}
          </div>
          <div className="navLinks">
            <NavLink to={"/"} className={"navLink"}>
              Home
            </NavLink>
            <NavLink to={"/recipes"} className={"navLink"}>
              Recipes
            </NavLink>
            <NavLink to={"/addRecipe"} className={"navLink"}>
              Add Recipe
            </NavLink>
            <NavLink to={"/contacts"} className={"navLink"}>
              Contact
            </NavLink>
          </div>
        </div>

        <div className="rightSide">
          <NavLink to={"/signIn"} className={"navLink"}>
            Sign In
          </NavLink>
          <button className="signUpBtn">Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
