import React, { useState, useEffect } from "react";
import BlogList from "../../Blog/BlogList";
//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";

function BlogsByTags({auth, tag }) {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  dispatch({ type: "fetchBlogsByTag" });
  const { fetchBlogsByTag } = bindActionCreators(
    ActionCreators,
    dispatch
  );


  useEffect(() => {
    if (tag) {
      fetchBlogsByTag(tag);
    }
    return function () {
      //I don't really want to do anything here, but it will leak memory
      //without a fake function here.
    };
  }, [])
  
  if (!blogs.isLoading && !blogs.errMess) {
    return (
      <>
        <BlogList auth={auth} blogs={blogs}/>
      </>
    );
  } else {
    return <div>Loading...</div>
  }

}

const Tags = connect(null, null)(BlogsByTags);
export default Tags