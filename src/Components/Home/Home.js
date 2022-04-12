import React from "react";
import Title from "../Reusable/Title/Title";
import { connect, useSelector } from "react-redux";
import Line from "../Reusable/Line/Line";
import { NavLink } from "react-router-dom";

import "./Home.css";

function HomePage(props) {
  return (
    <div className="home-wrapper">
      <Title titleStr="Home" />
      <div className="inner-home-wrapper">
        <div className="headline">
          <h1>Welcome to Curlybrackets.</h1>
          <h2>Blog in Dark Mode</h2>
        </div>
        <Line></Line>
        <VariableBanner />
      </div>
    </div>
  );
}

function VariableBanner() {
  const auth = useSelector((state) => state.auth);

  if (auth.isAuthenticated) {
    return <div>Hello User!</div>;
  } else {
    return (
      <div>
        <h3>Want to start sharing your own thoughts?</h3>
        <h2>
          <div className="linkNoUnderline">
            <NavLink to="/signup">Sign Up</NavLink> or{" "}
            <NavLink to="/login">Log In</NavLink>
          </div>
        </h2>
      </div>
    );
  }
}

const Home = connect(null, null)(HomePage);

export default Home;
