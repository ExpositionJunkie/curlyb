import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import DOMPurify from "dompurify";
import BlogFooter from "./BlogFooter";

// this component is for rendering the inner entries when blogs are listed out
export default function BlogEntry({ blog, auth }) {
  const [tags, setTags] = useState([]);
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text),
  });

  const date = new Date(blog.createdAt);

  useEffect(() => {
    TagSplit();
  }, [blog]);

  function TagSplit() {
    if (blog) {
      if (blog.tags) {
        let temp = blog.tags.toString().replace("#", " ").toLowerCase().split(/[\s*|#]/);
        setTags((prevState) => [...prevState, ...temp]);
       
      }
    }
  }

  if (blog) {
    return (
      <div id="inner_entry_wrapper" className="inner-entry-wrapper">
        <NavLink className="link-wrap" to={`/blog/${blog._id}`}>
          <Subtitle
            titleStr={blog.title}
            subtitleStr={blog.subtitle}
          ></Subtitle></NavLink>
          <Line></Line>
          <div className="author-details">
            <div className="author">
              <h2>Author: {blog.author.username}</h2>
            </div>
            <p className="date"> - {date.toLocaleString()}</p>
          </div>
          <Line></Line>
          <div className="blog-body-wrap">
            <div
              className="blog-entry-body linkNoUnderline"
              dangerouslySetInnerHTML={sanitizedData()}
            />
          </div>
          <div className="marg3">
            <Line></Line>
          </div>
        
        <div className="tags">
          <p>Tags:</p>

          {tags.map((tag, index) => {
            if (tag) {
              return (
                <NavLink
                  className="link-wrap"
                  key={index}
                  to={`/blog/tags/${tag}`}
                >
                  <p className="tag">
                    {tag}
                  </p>
                </NavLink>
              );
            } else {
              return <div key={index}></div>;
            }
          })}
        </div>

        <BlogFooter blog={blog} comments={false} auth={auth} />
      </div>
    );
  } else {
    return <></>;
  }
}
