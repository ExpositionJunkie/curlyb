import React, { useState } from "react";
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
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
//youtube embed
import ReactComponent from "../Youtube/Extension";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";

import "./Post.css";
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
  const { postBlog, editBlog } = bindActionCreators(ActionCreators, dispatch);

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
    content: DOMPurify.sanitize(input.text),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const newHTML = checkYoutubeLink(html);
      console.info(newHTML);
      setInput((prevState) => ({
        ...prevState,
        text: DOMPurify.sanitize(newHTML),
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
    console.info(typeof text, text);

    if (
      text
        .toString()
        .includes(
          '<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.youtube.com/'
        )
    ) {
      const ytLinkFull =
        /<a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/www\.youtube\.com\/watch\?v=d5Hgjp_1V0s">(https:\/\/www\.youtube\.com\/watch\?([^\s]+))<\/a>/gim;
      const innerStr = ytLinkFull.exec(text)[0];
      console.info(innerStr);
      const ytRegex = /href="https:\/\/www.youtube.com\/watch\?v=([^\s]+)"/gim;
      let ytEmbed = ytRegex.exec(text)[1];
      console.info(ytEmbed);
      console.log(typeof ytEmbed, ytEmbed);
      let newText = text.replace(
        innerStr,
        `<react-component>
          <div className="video-responsive">
            <a
              rel="noopener noreferrer nofollow"
              target="_blank"
              href={'https://www.youtube.com/watch?v=${ytEmbed}'}
            >
            <object data={'https://www.youtube.com/embed/${ytEmbed}'}
        width='560px' height='315px'>
              </object>
            </a>
          </div>
        </react-component>`
      );
      console.info(newText);
      return newText;
    } else {
      console.log("doesn't include");
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
