import React from "react";
import Title from "../Reusable/Title/Title";
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import { blogData } from "../../data/blogData.js";
import "./Blog.css";

function BlogEntry({ blog }) {
  if (blog) {
    return (
      <div id="inner_entry_wrapper">
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        {blog.text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <p className="date"> - {blog.date}</p>
        <div className="marg3">
          <Line></Line>
        </div>
        <div className="tags">
          {blog.tags.map((paragraph, index) => {
            return (
              <p className="tag" key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
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
              <div>
                <div className="entry shadow-box marg3" key={blogEntry.id}>
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
