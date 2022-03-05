import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo} from "../../data/photos/frontend/logo.svg"
import { ReactComponent as RightBracket} from "../../data/photos/frontend/rightbracket.svg"
import { ReactComponent as LeftBracket} from "../../data/photos/frontend/leftbracket.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="headerWrapper">
        <LeftBracket className="rightBracket" />
        <h1 className="titleText">Curly Brackets</h1>
        <Logo className="logo"/>
        <RightBracket className="leftBracket"/>
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
