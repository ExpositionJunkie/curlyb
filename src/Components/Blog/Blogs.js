import React from "react";
import Title from "../Reusable/Title/Title";
import { Outlet } from "react-router-dom";
import "./Blogs.css";

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <Title titleStr="Blog" />
      <div>

          
          <Outlet />
      </div>
    </div>
  );
}
