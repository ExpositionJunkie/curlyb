import React, { useEffect } from "react";
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify"
import BlogFooter from "./BlogFooter"

//redux

import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";

//https://overreacted.io/a-complete-guide-to-useeffect/
//https://www.robinwieruch.de/react-hooks-fetch-data/

export function BlogEntryS() {
  //dispatches for blogs
  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({ type: "fetchBlogs" });
  const blogs = useSelector((state) => state.blogs);

  const { fetchBlogs } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text)
  })

  let { blogId } = useParams();
  let blog = blogs.blogs.find(blog => blog._id === blogId)

  let date

  if (blog) {
    date = new Date(blog.createdAt)
  }

  

  if (blog) {
    return (
      <div key={blogId} id="inner_entry_wrapper" className="standalone">
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        <Line />
        <span className="author-details">
        <div className="author"><h2>Author: {blog.author.username}</h2></div>
        <p className="date"> - {date.toLocaleString()}</p>
        </span>
        <Line />
        <div className="blog-body-wrap">
        <div className="blog-entry-body" dangerouslySetInnerHTML={sanitizedData()} />
        </div>
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
          <BlogFooter blog={blog} comments={true} />
      </div>
    );
  } else {
    return <></>;
  }
}

const BlogEntryStandalone = connect(null,null)(BlogEntryS);

export default BlogEntryStandalone