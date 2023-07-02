import React from "react";
import "./Form.css";

function Form() {
  return (
    <div>
      <form action="" className="signUpForm">
        <label htmlFor="userName" className="registerLabels">
          Full name <span className="mandatory">*</span>
        </label>
        <input
          type="text"
          placeholder="Ramsey Gordon"
          className="registerInput"
          id="userName"
          required
        />
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
        <button className="signUpBtn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
