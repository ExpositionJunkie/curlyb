import React from "react";
import PropTypes from "prop-types";
import { NodeViewWrapper } from "@tiptap/react";

import "./YoutubeEmbed.css";

//https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
// please note that
const YoutubeEmbed = ({ embedId }) => {
  return (
    <NodeViewWrapper className="react-component">
      <div className="video-responsive">
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          href={"https://www.youtube.com/watch?v=" + { embedId }}
        >
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </a>
      </div>
    </NodeViewWrapper>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
