import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "./Post.css";

function Post(props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write your hello world or your magnum opus here.</p>",
  });
  return (
    <div className="post-wrapper">
      <input
        type="text"
        id="title"
        className="title"
        autocomplete="none"
        placeholder="Title"
      ></input>
      <input
        type="text"
        id="subtitle"
        className="subtitle"
        autocomplete="none"
        placeholder="Subtitle"
      ></input>
      <EditorButtons editor={editor}></EditorButtons>
      <div className="editor">
        <EditorContent editor={editor} />
      </div>
      <button className="submit-button">
        This button does not do anything yet.
      </button>
    </div>
  );
}

function EditorButtons({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-button-wrap">
      <div className="tooltip sm-row-1">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={solid("bold")} />
        </button>
        <span className="tooltip-text sm-row-1">Bold</span>
      </div>

      <div className="tooltip">
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={solid("italic")} />
        </button>
        <span className="tooltip-text sm-row-1">Italic</span>
      </div>

      <div className="tooltip">
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={solid("strikethrough")} />
        </button>
        <span className="tooltip-text sm-row-1">Strikethrough</span>
      </div>

      <div className="tooltip">
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <FontAwesomeIcon icon={solid("eraser")} />
        </button>
        <span className="tooltip-text sm-row-1">Remove Formatting</span>
      </div>

      <div className="tooltip">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={solid("paragraph")} />
        </button>
        <span className="tooltip-text sm-row-1">Paragraph</span>
      </div>

      <div className="tooltip">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </button>
        <span className="tooltip-text">Heading 1</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </button>
        <span className="tooltip-text">Heading 2</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </button>
        <span className="tooltip-text">Heading 3</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          H4
        </button>
        <span className="tooltip-text">Heading 4</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          H5
        </button>
        <span className="tooltip-text">Heading 5</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          H6
        </button>
        <span className="tooltip-text">Heading 6</span>
      </div>

      <div className="tooltip sm-row-1">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={solid("list")} />
        </button>
        <span className="tooltip-text">Bullet Point List</span>
      </div>

      <div className="tooltip sm-row-2">
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active " : ""}
        >
          <FontAwesomeIcon icon={solid("list-ol")} />
        </button>
        <span className="tooltip-text">Numbered/Ordered List</span>
      </div>

      <div className="tooltip sm-row-2">
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active " : ""}
        >
          <FontAwesomeIcon icon={solid("file-code")} />
        </button>
        <span className="tooltip-text">Code Block</span>
      </div>

      <div className="tooltip sm-row-2">
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active " : ""}
        >
          <FontAwesomeIcon icon={solid("code")} />
        </button>
        <span className="tooltip-text">Code Snippet</span>
      </div>

      <div className="tooltip sm-row-2">
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active " : ""}
        >
          <FontAwesomeIcon icon={solid("quote-left")} />
        </button>
        <span className="tooltip-text">Blockquote</span>
      </div>

      <div className="tooltip">
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <FontAwesomeIcon icon={solid("ruler-horizontal")} />
        </button>
        <span className="tooltip-text">Horizontal Line</span>
      </div>

      <div className="tooltip sm-row-2">
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          <FontAwesomeIcon icon={solid("arrow-down")} />
        </button>
        <span className="tooltip-text">New Line</span>
      </div>

      <div className="tooltip sm-row-2">
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FontAwesomeIcon icon={solid("rotate-left")} />
        </button>
        <span className="tooltip-text">Undo</span>
      </div>
      <div className="tooltip sm-row-2">
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FontAwesomeIcon icon={solid("rotate-right")} />
        </button>

        <span className="tooltip-text">Redo</span>
      </div>
    </div>
  );
}

export default Post;
