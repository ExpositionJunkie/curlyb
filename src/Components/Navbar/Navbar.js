import React, { useState } from "react";
import Title from "../Reusable/Title/Title";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../data/photos/frontend/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
//https://reactjs.org/docs/accessibility.html
//Good article on aria attributes and a reminder to write accessible code

export default function Navbar({ auth }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      
      <NavLink className="nav-link-text-deco" to="/">
        <Title
          titleStr="Curly Brackets"
          centerLogo={<Logo className="logo" />}
        ></Title>
      </NavLink>

      
      {isNavExpanded ? ( //terinary to see if the menu is open
        <div className="menu-dropdown" >
          {auth.isAuthenticated ? ( //show login/logout dynamically
            <NavLink
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              className="menu-item"
              to="/login"
            >
              <FontAwesomeIcon className="nav-icon" icon={solid("user-astronaut")} />
              Logout
            </NavLink>
          ) : (
            <NavLink
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              className="menu-item"
              to="/login"
            >
              <FontAwesomeIcon className="nav-icon" icon={solid("user-astronaut")} />
              Login
            </NavLink>
          )}
          <NavLink
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="menu-item"
            to="/"
          >
            <FontAwesomeIcon className="nav-icon" icon={solid("home")} />
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="menu-item"
            to="/blog"
          >
            <FontAwesomeIcon className="nav-icon" icon={solid("blog")} />
            Blog
          </NavLink>
          <NavLink
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="menu-item"
            to="/about"
          >
            <FontAwesomeIcon className="nav-icon" icon={solid("address-card")} />
            About
          </NavLink>
          <NavLink
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="menu-item"
            to="/blog/devblog"
           
          >
            <FontAwesomeIcon className="nav-icon" icon={solid("computer")} />
            Devblog
          </NavLink>
          <NavLink
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="menu-item"
            to="/csp"
          >
            <FontAwesomeIcon className="nav-icon" icon={solid("cookie-bite")} />
            Cookie Policy
          </NavLink>
        </div>
      ) : (
        <></>
      )}

<div className="linkWrapper">


        <span className="navbarLinks">
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <FontAwesomeIcon icon={solid("bars")} />
        </button>

        
          <NavLink className="long-menu" to="/"><FontAwesomeIcon className="nav-icon" icon={solid("home")} />Home</NavLink>
          <NavLink className="long-menu" to="/blog"><FontAwesomeIcon className="nav-icon" icon={solid("blog")} />Blog</NavLink>
          <NavLink className="long-menu" to="/about"><FontAwesomeIcon className="nav-icon" icon={solid("address-card")} />About</NavLink>
          {auth.isAuthenticated ? ( //show login/logout dynamically
            <NavLink className="menu-item" to="/login">
              <FontAwesomeIcon className="nav-icon" icon={solid("user-astronaut")} />
              Logout
            </NavLink>
          ) : (
            <NavLink className="menu-item" to="/login">
              <FontAwesomeIcon className="nav-icon" icon={solid("user-astronaut")} />
              Login
            </NavLink>
          )}
   
        </span>
      </div>
      <Outlet />
    </nav>
  );
}
