import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorButtons from "../Post/EditorButtons";
import DOMPurify from "dompurify";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
import "../Post/Post.css";
import "./AddComment.css";

function CommentEditor({ content, blog, active }) {
  const [input, setInput] = useState({
    text: "",
  });

  //redux dispatch
  const dispatch = useDispatch();
  dispatch({ type: "postComment" });
  const { postComment } = bindActionCreators(ActionCreators, dispatch);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const editor = useEditor({
    extensions: [StarterKit],
    type: "doc",
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setInput((prevState) => ({
        ...prevState,
        text: DOMPurify.sanitize(html),
      }));
    },
  });

  const checkKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
    }
  };

  const handleSubmit = (evt) => {
    postComment(input.text, blog._id)
      .then((res) => {})
      .then((res) => {
        navigate(0);
      });
  };

  if (auth) {
    return (
      <div className="post-wrapper">
        <form
          autoComplete="off"
          onSubmit={(evt) => handleSubmit(evt)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <EditorButtons editor={editor}></EditorButtons>

          <EditorContent className="editor" id="text" editor={editor} />

          <input
            type="submit"
            name="submit"
            value="Submit"
            className="submit-button"
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2>
          <div className="action-call-heading">
            <NavLink className="linkNoUnderline" to="/signup">
              Sign Up
            </NavLink>{" "}
            or{" "}
            <NavLink className="linkNoUnderline" to="/login">
              Log In
            </NavLink>
          </div>
        </h2>
      </div>
    );
  }
}

const AddComment = connect(null, null)(CommentEditor);

export default AddComment;
