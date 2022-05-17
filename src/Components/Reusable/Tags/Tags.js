import React, { useEffect } from "react";
import BlogList from "../../Blog/BlogList";
//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";

function BlogsByTags({ auth, tag }) {
  const dispatch = useDispatch();
  dispatch({ type: "fetchBlogsByTag" });
  const { fetchBlogsByTag } = bindActionCreators(ActionCreators, dispatch);
  const blogsByTag = useSelector((state) => state.blogsByTag);

  useEffect(() => {
    if (tag) {
      fetchBlogsByTag(tag);
    }
    return function () {
      //I don't really want to do anything here, but it will leak memory
      //without a fake function here.
    };
  }, [tag]);


  if (blogsByTag.isLoading) {
    return <div>Loading...</div>;
  } else if (blogsByTag.errMess) {
    return <div>{blogsByTag.errMess}</div>;
  } else {
    return (
      <>
        <BlogList auth={auth} blogs={blogsByTag} />
      </>
    );
  }
}

const Tags = connect(null, null)(BlogsByTags);
export default Tags;
