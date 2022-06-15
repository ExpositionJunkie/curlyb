import React, { useState, useEffect } from "react";
import Post from "./Post";
import Loading from "../Loading/Loading";
import { NavLink, useParams } from "react-router-dom";
import splash from "../../../data/photos/frontend/splash.png";
import "./VariablePost.css";

function VariablePost({ auth }) {
  let location = useParams();

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.isAuthenticated) {
      if (localStorage.getItem("blog")) {
        let blog = JSON.parse(localStorage.getItem("blog"));
        return (
          <Post
            location={location}
            title={blog.title}
            tags={blog.tags}
            text={blog.text}
            subtitle={blog.subtitle}
          />
        );
      } else {
        return <Post location={location} />;
      }
    } else {
      return (
        <div className="unverified-post">
          <h3 className="tagline">Want to start sharing your own thoughts?</h3>
          <NavLink to="/signup">
            <div className="post-splash-container">
              <img
                className="splash"
                src={splash}
                alt="Splash page showing curlybrackets blog layout on both mobile and desktop."
              />
            </div>
          </NavLink>
          <h2 className="linkNoUnderline">
            <NavLink to="/signup">Signup</NavLink> or{" "}
            <NavLink to="/login">Login</NavLink> to join the conversation.
          </h2>
        </div>
      );
    }
  }
}

export default VariablePost;
