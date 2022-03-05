import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="headerWrapper">
        <h1 className="titleText">Curly Brackets</h1>
      </div>
      <div className="linkWrapper">
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
  );
}
