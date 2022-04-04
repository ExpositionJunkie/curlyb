import { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const [input, setInput] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  const handleLogin = (evt) => {
    console.info(input);
    evt.preventDefault();
  };

  return (
    <>
      <form onSubmit={(evt) => handleLogin(evt)}>
        <span className="inner-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            required
            id="email"
            autocomplete="email"
            placeholder="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autocomplete="current-password"
            placeholder="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            name="submit"
            id="login-submit"
            value="Submit"
            className="login-submit"
          ></input>
        </span>
      </form>
    </>
  );
}
