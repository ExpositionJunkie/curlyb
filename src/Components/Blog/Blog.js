import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line"
import { blogData } from "../../data/blogData.js";
import "./Blog.css";

function BlogEntry({ blog }) {
  if (blog) {
    return (
      <div id="inner_entry_wrapper">
        <div className="blog_title">
          <h1>{blog.title}</h1>
          <h2>{blog.subtitle}</h2>
        </div>
        {blog.text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <p className="date"> - {blog.date}</p>
      </div>
    );
  } else {
    return <div>Oops, there's nothing here! Better call Roz</div>;
  }
}

export default function Blog() {
  return (
    <div className="blog_wrapper">
      <Title titleStr="Dev Blog" />
      <div className="entry_wrapper">
        <div>
          {blogData.map((blogEntry) => {
            return (
              <div className="entry" key={blogEntry.id}>
                <BlogEntry blog={blogEntry} />
                <Line></Line>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
