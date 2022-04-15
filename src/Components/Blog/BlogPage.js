import React, { useEffect } from "react";
import Line from "../Reusable/Line/Line";
import BlogEntry from "./BlogEntry";
import { Link } from "react-router-dom";
import VariablePost from "../Reusable/Post/VariablePost";
import "./Blogs.css";
//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";


export function Blogs() {
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
        <div className="post-list-wrapper">
          <VariablePost location="blog" />
        </div>
        <div>
          {blogs.blogs.map((blogEntry) => {
            return (
              <div key={blogEntry._id}>
                <div className="entry shadow-box">
                  <Link id="link-wrap" to={`./${blogEntry._id}`}>
                    <BlogEntry blog={blogEntry} />
                  </Link>
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

const BlogPage = connect(null, null)(Blogs);

export default BlogPage;