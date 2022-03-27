import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as validate from "../../shared/validation.js";

export default function Signup(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [validatedData, setValidatedData] = useState({
    email: false,
    password: false,
    username: false,
  });
  const [labelText, setLabelText] = useState({
    email: "Email",
    password: "Password",
    username: "Username",
  });

  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({ type: "signupUser" });

  const { signupUser } = bindActionCreators(ActionCreators, dispatch);

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  //this will check that the validation information is correct as typed
  //and dynamically update label names
  const scrubData = (inputData) => {
    if (validate.checkEmail(inputData.email)) {
      setValidatedData((prevState = { ...prevState, email: true }));
    } else {
      setLabelText(
        (prevState = { ...prevState, email: "Email not validated." })
      );
    }
    if (validate.checkPassword(inputData.password)) {
      setValidatedData((prevState = { ...prevState, password: true }));
    } else {
      setLabelText(
        (prevState = { ...prevState, email: "Email not validated." })
      );
    }
    if (validate.isBetween(inputData.username, 8, 30)) {
      setValidatedData((prevState = { ...prevState, username: true }));
    } else {
      setLabelText(
        (prevState = { ...prevState, email: "Email not validated." })
      );
    }
  };

  const handleSignup = (evt) => {
    scrubData(input);
    if (
      validatedData.email &&
      validatedData.password &&
      validatedData.username
    ) {
      signupUser(input);
    } else {
      //just don't want to reset the labels since these are set dynamically
      evt.preventDefault();
    }
  };

  return (
    <>
      <div className="signupWrapper">
        <h1>Sign Up</h1>
        <div className="signupForm">
          <form>
            <label htmlFor="email">{labelText.email}</label>
            <input
              type="text"
              name="email"
              id="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">{labelText.username}</label>
            <input
              type="text"
              name="username"
              id="username"
              value={input.username}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">{labelText.password}</label>
            <input
              type="text"
              name="password"
              id="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
