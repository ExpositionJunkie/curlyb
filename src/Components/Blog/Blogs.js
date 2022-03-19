import React from "react";
import Title from "../Reusable/Title/Title";
import "./Blogs.css";
import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <Title titleStr="Dev Blog" />
      <div className="entry-wrapper">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
