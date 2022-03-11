import React, { useState } from "react";

export default function Signup(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  //const [error, setError] = useState(null);


  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  return (
    <>
      <div className="signupWrapper">
        <h1>Sign Up</h1>
        <div className="signupForm">
          <form>
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
