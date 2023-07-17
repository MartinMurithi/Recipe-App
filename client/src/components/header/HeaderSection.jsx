import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./HeaderSection.css";

function HeaderSection() {
  return (
    <div className="welcomeSection">
      <h1 className="welcomeDescription">Choose from</h1>
      <h1 className="welcomeDescription">thousands of</h1>
      <h1 className="welcomeDescription"> recipes</h1>
      <p className="welcomeHeaderText">
        "Discover a Treasure Trove of Culinary Creations: Our Recipe Haven
        <br />
        Awaits, Where Every Dish is an Epicurean Symphony of Flavors and
        Delightful Adventures!"
      </p>
      <div className="sectionSignUp">
              <NavLink to={"/signUp"} className="signupToday">Sign up today </NavLink>
              <FaArrowRight className="rightArrow" />
      </div>
    </div>
  );
}

export default HeaderSection;
