import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import banner from "../../data/photos/dragons-song-colorful-banner.jpg";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="headerTitle">
        <div className="headerOverlay">
          <img className="banner"
            src={banner}
            alt="Colorful banner resembling petals or dragon scales created by NightCafe - a website specializing in art made by artificial intelligence."
          />
          <h1 className="titleText">Curly Brackets</h1>
        </div>
      </div>

      <div className="linkWrapper">
        <div>
          <span className="navbarLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/apipractice">API Practice</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
