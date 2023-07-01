import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import Form from "./Form";
function LogIn() {
  const navigate = useNavigate();
  return (
    <div className="signUp_signInSection">
      <div className="signUpSection">
        <div className="logoComponent">
          <Logo />
        </div>

        <p className="createAcc">Sign In to Kocima</p>
        <Form />
        <p className="terms_conditions">
          By signing up you agree to our <span className="terms">terms</span> of
          service.
        </p>
      </div>
      <div className="loginLinkSection">
        <p className="welcomeText">Hello There, Join Us</p>
        <p className="loginText">
          Enter your personal details and join the <br /> cooking community
        </p>
        <button className="signInLinkBtn" onClick={() => navigate("/signUp")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LogIn;
