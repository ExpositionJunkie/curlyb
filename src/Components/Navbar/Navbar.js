import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../data/photos/frontend/logo.svg";
import { ReactComponent as RightBracket } from "../../data/photos/frontend/rightbracket.svg";
import { ReactComponent as LeftBracket } from "../../data/photos/frontend/leftbracket.svg";
import Elipses from "../../data/photos/frontend/Elipses.svg";
//https://reactjs.org/docs/accessibility.html
//Good article on aria attributes and a reminder to write accessible code

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <div className="headerWrapper">
      <img id="elipses" src={Elipses} alt="navigation Elipses" />
        <LeftBracket className="leftBracket" />
        <NavLink className="titleText" to="/">
          Curly Brackets
        </NavLink>
        
        <Logo className="logo" />
        <RightBracket className="rightBracket" />
      </div>
      
      <div className="linkWrapper">
        <span className="navbarLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/apipractice">API Practice</NavLink>
        </span>
      </div>
      <Outlet />
    </nav>
  );
}
