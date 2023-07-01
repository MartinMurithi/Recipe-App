import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import Logo from "../logo/Logo";

function Nav() {
  const navigate = useNavigate();

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
          <button className="signUpBtn" onClick={() => navigate("/signUp")}>
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
