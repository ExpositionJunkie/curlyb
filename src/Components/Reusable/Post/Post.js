import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorButtons from "./EditorButtons"
import DOMPurify from "dompurify";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
import { useNavigate} from "react-router-dom";
import "./Post.css";

function PostWrapper({location, content}) {
  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    text: "",
    tags: "",
  });

  //redux dispatch
  const dispatch = useDispatch();
  dispatch({ type: "postBlog" });
  const { postBlog } = bindActionCreators(ActionCreators, dispatch);

  //for sending you to the blog after this posts
  let navigate = useNavigate();


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

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  const checkKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
    }
  };

  const handleSubmit = (evt) => {
    postBlog(input);
    if (location === "home") {
      navigate("/blog")
    } else if (location === "blog") {
      navigate("/")
    }
  };

  return (
    <div className="post-wrapper">
      <h1 className="post-header">Write your magnum opus or hello world below:</h1>
      <form
        autoComplete="off"
        onSubmit={(evt) => handleSubmit(evt)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <input
          type="text"
          id="title"
          className="title"
          placeholder="Title"
          value={input.title}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="text"
          id="subtitle"
          className="post-subtitle"
          placeholder="Subtitle"
          value={input.subtitle}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="text"
          id="tags"
          className="post-subtitle"
          placeholder="tags separated by spaces"
          value={input.tags}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <EditorButtons editor={editor}></EditorButtons>
          <EditorContent className="editor" id="text" editor={editor} />
  
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="submit-button"
          >
          </input>
 
      </form>
    </div>
  );
}


const Post = connect(null, null)(PostWrapper);

export default Post;
