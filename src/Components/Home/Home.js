import React from "react";
import Title from "../Reusable/Title/Title";
import BlogList from "../Blog/BlogList";
import { connect } from "react-redux";
import Line from "../Reusable/Line/Line";
import VariablePost from "../Reusable/Post/VariablePost";


import "./Home.css";

function HomePage({auth}) {
  return (
    <div className="home-wrapper">
      <Title titleStr="Home" />
      <div className="inner-home-wrapper">
        <div className="headline">
          <h1 className="home-title">Welcome to Curlybrackets.</h1>
          <h2 className="home-subtitle">Blog in Dark Mode</h2>
        </div>
        <Line></Line>
        <VariablePost location={"home"} auth={auth}/>
        <div className="plain-link"><BlogList auth={auth} /></div>
      </div>
    </div>
  );
}

const Home = connect(null, null)(HomePage);

export default Home;
