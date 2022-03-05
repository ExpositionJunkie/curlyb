import React, { useState, useEffect } from "react";

function SignupHelper({ submitTrigger, input }) {
  //const [signUpResponse, setSignUpResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (submitTrigger) {
      var url = "https://localhost:3443/users/signup";
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: {
          username: `${input.username}`,
          email: `${input.email}`,
          password: `${input.password}`,
        },
      };
      fetch(url, requestOptions)
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
    }
  }, [submitTrigger]);

  return <div></div>;
}

export default function Signup(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [submitTrigger, setSubmitTrigger] = useState(false);

  const handleSubmit = (evt) => {
    setSubmitTrigger(true);
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    if (submitTrigger) {
      setSubmitTrigger(false);
    }
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
        <div>
          <SignupHelper submitTrigger={submitTrigger} input={input} />
        </div>
      </div>
    </>
  );
}

//for testing
{
  /* <div>email: {input.email}</div>
<div>username: {input.username}</div>
<div>password: {input.password}</div>
<div>submit trigger: {submitTrigger.toString()}</div> */
}
