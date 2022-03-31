import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import Title from "../Reusable/Title/Title";

export default function Signup() {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [errorText, setErrorText] = useState({
    status: "",
    message: "",
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

  const handleSignup = (evt) => {
    evt.preventDefault()
    signupUser(input)
  };

  return (
    <>
      <Title titleStr="Signup"></Title>
      <div className="signupWrapper">
        <h2>{errorText.status}</h2>
        <h2>{errorText.message}</h2>
        <div className="signupForm">
          <form onSubmit={(evt) => handleSignup(evt)}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={input.username}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password</label>
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
