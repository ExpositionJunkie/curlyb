import React, { useEffect } from "react";
import Comment from "./Comment";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";

function CommentFetch({ blogId }) {
  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({ type: "fetchComments" });
  const comments = useSelector((state) => state.comments);

  const { fetchComments } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    fetchComments(blogId)
  }, []);

  if (comments.isLoading || comments.errMess) {
    return <></>;
  } else if (!comments.isLoading && !comments.errMess) {
    return (
      <div className="entry-wrapper">
        {comments.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </div>
    );
  }
}

const Comments = connect(null, null)(CommentFetch);

export default Comments;
