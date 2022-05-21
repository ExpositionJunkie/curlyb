import LoginForm from "../Login/LoginForm";
import Title from "../Reusable/Title/Title";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { connect, useSelector, useDispatch } from "react-redux";
import splash from "../../data/photos/frontend/splash.png";

import "./Login.css";

function LoginPage() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  dispatch({ type: "logoutUser" });
  const { logoutUser } = bindActionCreators(ActionCreators, dispatch);
  let navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then((res) => {})
      .then((res) => {
        navigate(1);
      });
  };

  if (auth.isAuthenticated) {
    return (
      <div className="login-wrapper">
        <Title titleStr="Logout" />
        <div className="login-form-inner-wrapper">
          <div className="login-form">
            <p>Hi choom, you are currently logged in!</p>
            <p>
              Have to go? We're sad to see you go, but we'll catch you on the
              async!
            </p>
            <button className="logout-button" onClick={() => handleLogout()}>
              Logout for now.
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-wrapper">
        <Title titleStr="Login" />
        <h1 className="login-tagline">Login below</h1>{" "}
        <div className="login-form-inner-wrapper">
          
          <div className="signup-container">
            <div className="signup-form">
              <LoginForm />
            </div>
            <NavLink to="/signup">
            <div className="splash-container">
              <img
                className="splash"
                src={splash}
                alt="Splash page showing curlybrackets blog layout on both mobile and desktop."
              />
            </div>
            </NavLink>
          </div>
        </div>
        <div className="signup-call linkNoUnderline">
          <h1 className="login-tagline">Don't have an account yet?</h1>
          <h2 className="login-tagline">
            No problem, choombatta, you can{" "}
            <NavLink to="/signup">signup here.</NavLink>
          </h2>
        </div>
      </div>
    );
  }
}

const Login = connect(null, null)(LoginPage);

export default Login;
