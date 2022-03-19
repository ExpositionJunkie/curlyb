import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import { blogData } from "../../data/blogData.js";
import BlogEntry from "./Blog"
import "./Blogs.css";
import {useNavigate} from "react-router-dom";


export default function Blog() {

  let navigate = useNavigate();

  return (
    <div className="blog-wrapper">
      <Title titleStr="Dev Blog" />
      <div className="entry-wrapper">
        <div>
          {blogData.map((blogEntry) => {
            return (
              <div onClick={navigate(`/blog/${blogEntry.id}`)}>
                <div className="entry shadow-box" key={blogEntry.id}>
                  <BlogEntry blog={blogEntry} />
                </div>
                <div className="pad2">
                  <Line />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
