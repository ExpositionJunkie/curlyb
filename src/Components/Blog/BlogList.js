import React from "react";
import Line from "../Reusable/Line/Line";
import { blogData } from "../../data/blogData.js";
import BlogEntry from "./BlogEntry";
import "./Blogs.css";
import { Link } from "react-router-dom";



//https://blog.logrocket.com/react-router-v6/

export default function BlogList() {


  return (
    <>
      {blogData.map((blogEntry) => {
        return (
          <div key={blogEntry.id}>
            <div className="entry shadow-box">
              <Link id="link-wrap" to={`./${blogEntry.id}`}>
                <BlogEntry blog={blogEntry} />
              </Link>
            </div>
            <div className="pad2">
              <Line />
            </div>
          </div>
        );
      })}
    </>
  );
}

