import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Form.css";

function LogIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="signUp_signInSection">
        <div className="signInSection">
          <div className="logoComponent">
            <Logo />
          </div>

          <p className="signInText">Sign In to Kocima</p>

          <form action="" className="signInForm">
            <label htmlFor="userEmail" className="registerLabels">
              Email <span className="mandatory">*</span>
            </label>
            <input
              type="email"
              placeholder="gordon@company.com"
              className="registerInput"
              id="userEmail"
              required
            />
            <label htmlFor="password" className="registerLabels">
              Password <span className="mandatory">*</span>
            </label>
            <input
              type="password"
              placeholder="Min 8 characters"
              minLength={8}
              id="password"
              className="registerInput"
              required
            />
            <button className="signInBtn">Sign In</button>
            <p className="signUpTextLink">Don't have an account? <NavLink
              to={"/signUp"} className="signUpText">
              Create Account</NavLink></p>
          </form>
          <p className="terms_conditions">
            By signing up you agree to our <span className="terms">terms</span>{" "}
            of service.
          </p>
        </div>

        {/* Bcg Image with sign up link */}
        <div className="signUpLinkSection">
          <p className="welcomeText">Hello There, Join Us</p>
          <p className="loginText">
            Enter your personal details and join the <br /> cooking community
          </p>
          <button className="signInLinkBtn" onClick={() => navigate("/signUp")}>
            Sign Up
          </button>
        </div>
      </div>
      
    </>
  );
}

export default LogIn;
