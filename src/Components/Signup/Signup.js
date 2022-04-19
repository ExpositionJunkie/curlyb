import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { NavLink } from "react-router-dom";
import Title from "../Reusable/Title/Title";
import LoginForm from "../Login/LoginForm";
import DOMPurify from "dompurify";
import "./Signup.css";

function SignupWrap() {
  const [validationText, setValidationText] = useState("");
  const signup = useSelector((state) => state.signup);
  //redux actions
  const dispatch = useDispatch();
  dispatch({ type: "signupUser" });

  useEffect(() => {
    if (!signup.signupSuccess) {
      validate();
    }
    if (signup.signupSuccess) {
      successMessage();
    }
  }, [signup]);

  const successMessage = () => {
    setValidationText(signup.message);
  };

  const validate = () => {
    setValidationText(signup.errMess);
  };

  if (!signup.signupSuccess) {
    return (
      <div className="signup-wrapper">
        <Title titleStr="Sign Up"></Title>
        <div className="signup-form-inner-wrapper">
          <div className="signup-form">
            <h1 className="signup-tagline">
              Want to start your own blog or leave a comment? Sign Up to leave
              your mark between the curly brackets.
            </h1>
            <div className="signup-validation-text">{validationText}</div>
            <SignupForm></SignupForm>
            <p>Already have an account? <NavLink to="/login">Login here.</NavLink></p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="signup-wrapper">
        <Title titleStr="Login"></Title>
        <div className="signup-form-inner-wrapper">
          <div className="signup-form">
            <h1>Registration Successful!</h1>
            <h2>Login Below</h2>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    );
  }
}

export function SignupForm() {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  //redux actions
  const dispatch = useDispatch();
  dispatch({ type: "signupUser" });
  const { signupUser } = bindActionCreators(ActionCreators, dispatch);

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: DOMPurify.sanitize(evt.target.value),
    }));
    evt.preventDefault();
  };

  const handleSignup = (evt) => {
    signupUser(input);
    evt.preventDefault();
  };

  return (
    <form onSubmit={(evt) => handleSignup(evt)}>
      <span className="inner-form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          maxLength="320"
          id="email"
          autocomplete="email"
          placeholder="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          id="username"
          maxLength="320"
          autocomplete="username"
          placeholder="username"
          value={input.username}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          minLength="8"
          maxLength="15"
          autocomplete="new-password"
          placeholder="password"
          value={input.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          name="submit"
          id="signup-submit"
          value="Submit"
          className="signup-submit"
        ></input>
      </span>
    </form>
  );
}


const Signup = connect(null, null)(SignupWrap);

export default Signup;
