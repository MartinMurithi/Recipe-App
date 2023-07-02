import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import Form from "./Form";

function CreateAcc() {
  const navigate = useNavigate();
  return (
    <div className="signUp_signInSection">
      <div className="signUpSection">
        <div className="logoComponent">
          <Logo />
        </div>

        <p className="createAcc">Create an Account</p>
        <Form />
        <p className="terms_conditions">
          By signing up you agree to our <span className="terms">terms</span> of
          service.
        </p>
      </div>
      <div className="loginLinkSection">
        <p className="welcomeText">Welcome Back</p>
        <p className="loginText">
          Already signed up, enter your details <br /> and start cooking your
          first meal today
        </p>
        <button className="signInLinkBtn" onClick={() => navigate("/signIn")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default CreateAcc;
