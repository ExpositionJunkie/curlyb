import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VariablePost from "../Reusable/Post/VariablePost";
import AddComment from "../Reusable/Comment/AddComment";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./BlogFooter.css";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { connect, useSelector, useDispatch } from "react-redux";

function BlogF({ blog }) {
  const [commentActive, setCommentActive] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  dispatch({ type: "logoutUser" });

  const handleComment = (evt) => {
    evt.preventDefault();
    setCommentActive(!commentActive);
  };

  const handleReply = (evt) => {
    evt.preventDefault();
    setReplyActive(!replyActive);
  };

  return (
    <div className="blog-footer-wrapper">
      <div className="blog-footer-icons">
        <FontAwesomeIcon
          icon={solid("reply")}
          className="shadow-icon blog-footer-icon"
          onClick={(evt) => handleReply(evt)}
        />
        <FontAwesomeIcon
          icon={solid("message")}
          className="shadow-icon blog-footer-icon"
          onClick={(evt) => handleComment(evt)}
        />
        <EditDeleteAuth auth={auth} blog={blog} />
      </div>
      <ReplyDrop blog={blog} replyActive={replyActive} />
    </div>
  );
}

function EditDeleteAuth({ auth, blog }) {
  const [editActive, setEditActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);
  const handleEdit = (evt) => {
    evt.preventDefault();
    setEditActive(!editActive);
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    setDeleteActive(!deleteActive);
  };

  if (auth.user) {
    if (auth.user.username === blog.author.username) {
      return (
        <>
          <FontAwesomeIcon
            onClick={(evt) => handleEdit(evt)}
            icon={solid("pen-to-square")}
            className="shadow-icon blog-footer-icon"
          />
          <FontAwesomeIcon
            onClick={(evt) => handleDelete(evt)}
            icon={solid("eraser")}
            className="shadow-icon blog-footer-icon"
          />
        </>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
}

function ReplyDrop({ blog, replyActive }) {
  if (replyActive) {
    return (
      <AddComment
        location={`blog`}
        blog={blog}
        replyActive={replyActive}
      ></AddComment>
    );
  } else {
    return <></>;
  }
}

const BlogFooter = connect(null, null)(BlogF);

export default BlogFooter;
