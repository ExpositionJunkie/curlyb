import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import Title from "../Reusable/Title/Title";
import "./Signup.css";

function SignupForm() {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const signup = useSelector((state) => state.signup)
  //redux actions
  const dispatch = useDispatch();
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
    evt.preventDefault();
    signupUser(input);
    console.info(signup)
  };

  return (
    <div className="signup-form-inner-wrap">
      <div className="signup-form">
        <form onSubmit={(evt) => handleSignup(evt)}>
          <span className="inner-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={input.username}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Submit"
            className="signup-submit"
          ></input>
          </span>
        </form>
      </div>
    </div>
  );
}

export function SignupError() {
  const signup = useSelector((state) => state.signup)
  if (signup.isLoading === true) {
    return <h1>...Loading</h1>
  } else if (signup.err) {
    return (
      <div className="signup-error">
        <h1>{signup.err.status}</h1>
        <h2>{signup.err.message}</h2>
      </div>
    )
  } else {
    return <>No error yet</>
  }
}

export function SignupSuccess() {
  const signup= useSelector((state) => state.signup)
  if (signup.isLoading === true) {
    return <h1>...Loading</h1>
  } else if (signup.signupSuccess) {
    return (
      <div>
        <h1>{signup.status}</h1>
        <h1>{signup.message}</h1>
      </div>
    )
  }
}

export function SignupWrapper() {
  

  return (
    <div>
      <Title titleStr="Sign Up"></Title>
      <div className="signup-wrapper">
      <div className="signup-form-inner-wrapper">
      <h1>
        If you have made it to this page in the wild, please note that it is not
        operational right now and is under construction. Shortly this will be
        updated to allow users to leave comments etc. However, this feature is currently undergoing construction, so your data may not be sent to the server at this time. Please check back soon!
      </h1>
      <h1>
        Want to start your own blog, or leave a comment? Sign up to create your
        own!
      </h1>
      </div>
      
      <SignupForm></SignupForm>
      <SignupError ></SignupError>
        
      </div>
    </div>
  );
}

const Signup = connect(null, null)(SignupWrapper)

export default Signup