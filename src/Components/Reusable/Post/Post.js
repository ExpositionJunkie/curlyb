import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//tiptap
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import EditorButtons from "./EditorButtons";
//sanitize
import DOMPurify from "dompurify";
//redux
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
//youtube embed
import ReactComponent from "../Youtube/Extension";

import "./Post.css";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
function PostWrapper({ title, subtitle, tags, text, edit, blogId, fullPost }) {
  const [input, setInput] = useState({
    title: title || "",
    subtitle: subtitle || "",
    text: text || "",
    tags: tags || "",
  });

  //redux dispatch
  const dispatch = useDispatch();
  dispatch({ type: "postBlog" });
  dispatch({ type: "editBlog" });
  dispatch({ type: "setYtEmbed" });
  const { setYtEmbed, postBlog, editBlog } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const ytEmbed = useSelector((state) => state.ytEmbed);

  //for sending you to the blog after this posts
  let navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        linkOnPaste: true,
        autolink: true,
      }),
      Image.configure({
        inline: true,
      }),
      Dropcursor.configure({
        color: "#ff4d94",
        width: 2,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
      Highlight,
      ReactComponent,
    ],
    type: "doc",
    content: DOMPurify.sanitize(input.text, {
      ALLOWED_TAGS: ["iframe", "react-component"],
      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
    }),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const newHTML = checkYoutubeLink(html);
      setInput((prevState) => ({
        ...prevState,
        text: DOMPurify.sanitize(newHTML, {
          ALLOWED_TAGS: ["iframe", "react-component"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
        }),
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

  const checkYoutubeLink = (text) => {
    //tiptap docs on how to insert a React Node
    //wasn't jazzed about having to use a button to add this and want it to auto detect
    //https://tiptap.dev/guide/node-views/react
    if (
      text.includes(
        '<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.youtube.com/watch?v='
      )
    ) {
      const ytLinkFull =
        /<a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/www\.youtube\.com\/watch\?v=([^\s]+)">(https:\/\/www\.youtube\.com\/watch\?([^\s]+))<\/a>/gim;
      const innerStr = ytLinkFull.exec(text)[0];
      const ytRegex =
        /<a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/www.youtube.com\/watch\?v=([^\s]+)"/gim;
      let ytEmbed = ytRegex.exec(text)[1];
      setYtEmbed(ytEmbed);
      let newText = text.replace(
        innerStr,

        `${(<ReactComponent><YoutubeEmbed></YoutubeEmbed></ReactComponent>)}`
      );

      return newText;
    } else {
      return text;
    }
  };

  const handleSubmit = (evt) => {
    let temp = input.tags
      .toString()
      .replace("#", " ")
      .toLowerCase()
      .split(/[\s*|#]/);
    setInput((prevState) => ({
      ...prevState,
      tags: temp,
    }));
    evt.preventDefault();
    if (!edit) {
      postBlog(input)
        .then((res) => {})
        .then((res) => {
          navigate(0);
        });
    } else {
      editBlog(input, blogId)
        .then((res) => {})
        .then((res) => {
          navigate(0);
        });
    }
  };

  return (
    <div className="post-wrapper linkNoUnderline">
      <form
        autoComplete="off"
        onSubmit={(evt) => handleSubmit(evt)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <h2 className="header">Share your thoughts...</h2>
        <input
          type="text"
          id="title"
          className="post-title shadow-icon"
          placeholder="Title"
          value={input.title}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="text"
          id="subtitle"
          className="post-subtitle shadow-icon"
          placeholder="Subtitle"
          value={input.subtitle}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <EditorContent
          autoFocus="end"
          className="editor shadow-icon"
          id="text"
          editor={editor}
        />
        <EditorButtons editor={editor}></EditorButtons>
        <input
          type="text"
          id="tags"
          className="post-subtitle shadow-icon"
          placeholder="tags separated by spaces"
          value={input.tags}
          onChange={(evt) => handleChange(evt)}
        ></input>

        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submit-button shadow-icon"
        ></input>
      </form>
    </div>
  );
}

const Post = connect(null, null)(PostWrapper);

export default Post;
