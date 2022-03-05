import React, { useState } from "react";
import axios from "axios";

export default function Signup(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = (evt) => {
    var url = "https://localhost:2443/users/signup";
    axios
      .post(url, {
        username: `${input.username}`,
        email: `${input.email}`,
        password: `${input.password}`,
      })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data, err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success!", data);
        }
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
        console.error("There was an error!", error);
      });

    evt.preventDefault();
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
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
