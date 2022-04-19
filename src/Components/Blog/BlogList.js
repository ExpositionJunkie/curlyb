import React, { useEffect } from "react";
import Line from "../Reusable/Line/Line";
import BlogEntry from "./BlogEntry";
import { Link } from "react-router-dom";
import "./Blogs.css";
//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";

//this is used on the home page - we pass in the param for the redirect to the blogentry
//since both use BlogEntry

//This component does not have the post included in it and is separate.

export function Blogs({}) {
  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({ type: "fetchBlogs" });
  const blogs = useSelector((state) => state.blogs);

  const { fetchBlogs } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (blogs.isLoading || blogs.errMess) {
    return <></>;
  } else if (!blogs.isLoading && !blogs.errMess) {
    return (
      <div className="entry-wrapper">
        <div>
          {blogs.blogs.map((blogEntry) => {
            return (
              <div key={blogEntry._id}>
                <div className="entry shadow-box">
                  <BlogEntry blog={blogEntry} location={"blog"} />
                </div>
                <div className="pad2">
                  <Line />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const BlogList = connect(null, null)(Blogs);

export default BlogList;
