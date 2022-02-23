import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav_wrapper">
      <div className="link_wrapper">
        <div>
          <span className="navbar_links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/apipractice">API Practice</NavLink>
          </span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
