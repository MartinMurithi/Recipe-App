import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Sign.css";

function CreateAcc() {
  const navigate = useNavigate();
  return (
    <div className="signUp_signInSection">
      <div className="signUpSection">
        <div className="logoComponent">
          <Logo />
        </div>

        <p className="createAcc">Create an Account</p>
        <form action="" className="signUpForm">
          <label htmlFor="userName" className="registerLabels">
            Full name
          </label>
          <input
            type="text"
            placeholder="Ramsey Gordon"
            className="registerInput"
            id="userName"
            required
          />
          <label htmlFor="userEmail" className="registerLabels">
            Email
          </label>
          <input
            type="email"
            placeholder="gordon@company.com"
            className="registerInput"
            id="userEmail"
            required
          />
          <label htmlFor="password" className="registerLabels">
            Password
          </label>
          <input
            type="password"
            placeholder="Min 8 characters"
            minLength={8}
            id="password"
            className="registerInput"
            required
          />
          <button className="signUpBtn">Sign Up</button>
        </form>
        <p className="terms_conditions">
          By signing up you agree to our <span className="terms">terms</span> of
          service.
        </p>
      </div>
      <div className="loginLinkSection">
        <p className="welcomeText">Welcome Back</p>
        <p className="loginText">
          Already signed up, enter your details <br/> and start cooking your first
          meal today
        </p>
        <button className="signInLinkBtn" onClick={()=>navigate("/signIn")} >Sign In</button>
      </div>
    </div>
  );
}

export default CreateAcc;
