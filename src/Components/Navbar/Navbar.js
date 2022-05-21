import React from "react";
import Title from "../Reusable/Title/Title";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../data/photos/frontend/logo.svg";
//https://reactjs.org/docs/accessibility.html
//Good article on aria attributes and a reminder to write accessible code

export default function Navbar({ auth }) {
  return (
    <nav className="navbar">
 
      <NavLink className="nav-link-text-deco" to="/">
          <Title titleStr="Curly Brackets" centerLogo={<Logo className="logo" /> } >
          </Title>
        </NavLink>
      
        
      <div className="linkWrapper">
        <span className="navbarLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <VariableLogin auth={auth} />
        </span>
      </div>
      <Outlet />
    </nav>
  );
}

function VariableLogin({ auth }) {
  if (auth.isAuthenticated) {
    return <NavLink to="/login">Logout</NavLink>;
  } else {
    return <NavLink to="/login">Login</NavLink>;
  }
}
