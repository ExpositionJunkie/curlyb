import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../Reusable/Post/Post";
import AddComment from "../Reusable/Comment/AddComment";
import Comments from "../Reusable/Comment/Comments";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./BlogFooter.css";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { connect, useSelector, useDispatch } from "react-redux";

function BlogF({ blog }) {
  const [commentActive, setCommentActive] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleComment = (evt) => {
    evt.preventDefault();
    setCommentActive(!commentActive);
  };

  const handleReply = (evt) => {
    evt.preventDefault();
    setReplyActive(!replyActive);
  };

  const handleEdit = (evt) => {
    evt.preventDefault();
    setEditActive(!editActive);
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
        <FontAwesomeIcon
          icon={solid("pen-to-square")}
          className="shadow-icon blog-footer-icon"
          onClick={(evt) => handleEdit(evt)}
        />
        <DeleteAuth auth={auth} blog={blog} />
      </div>
      <ReplyDrop auth={auth} blog={blog} replyActive={replyActive} />
      <CommentDrop blog={blog} commentActive={commentActive} />
      <EditDrop auth={auth} blog={blog} editActive={editActive} />
    </div>
  );
}

function DeleteAuth({ auth, blog }) {
  const dispatch = useDispatch();
  dispatch({ type: "deleteBlog" });

  const { deleteBlog } = bindActionCreators(ActionCreators, dispatch);

  const navigate = useNavigate();

  function deleteAlert(evt) {
    evt.preventDefault()
    if (window.confirm(`Are you sure you want to delete post titled ${blog.title}?`)) {
      handleDelete(evt)
    } else {
      evt.preventDefault()
    }
  }

  const handleDelete = (evt) => {
    deleteBlog(blog._id)
      .then((res) => {})
      .then((res) => {
        navigate(-1);
      });
  };

  if (auth.user) {
    if (auth.user.username === blog.author.username) {
      return (
        <FontAwesomeIcon
          onClick={(evt) => {
            deleteAlert(evt);
          }}
          icon={solid("trash")}
          className="shadow-icon blog-footer-icon"
        />
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
}

function ReplyDrop({ auth, blog, replyActive }) {
  if (auth) {
    if (replyActive) {
      return (
        <AddComment
          location={`blog`}
          blog={blog}
          active={replyActive}
        ></AddComment>
      );
    } else {
      return <></>;
    }
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2 className="linkNoUnderline">
          <NavLink to="/signup">Signup</NavLink> or{" "}
          <NavLink to="/login">Login</NavLink> to join the conversation.
        </h2>
      </div>
    );
  }
}

function CommentDrop({ blog, commentActive }) {
  if (commentActive) {
    return <Comments blogId={blog._id} />;
  } else {
    return <></>;
  }
}

function EditDrop({ auth, blog, editActive }) {
  if (auth.user) {
    if (auth.user.username === blog.author.username) {
      if (editActive) {
        return (
          <Post
            title={blog.title}
            subtitle={blog.subtitle}
            tags={blog.tags}
            text={blog.text}
            edit={true}
            blogId={blog._id}
          ></Post>
        );
      } else {
        return <></>;
      }
    } else {
      return (
        <>Sorry, you don't have permission to edit other people's posts.</>
      );
    }
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2 className="linkNoUnderline">
          <NavLink to="/signup">Signup</NavLink> or{" "}
          <NavLink to="/login">Login</NavLink> to join the conversation.
        </h2>
      </div>
    );
  }
}

const BlogFooter = connect(null, null)(BlogF);

export default BlogFooter;
