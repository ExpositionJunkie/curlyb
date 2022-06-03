import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./YoutubeEmbed";

export default Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,



  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
