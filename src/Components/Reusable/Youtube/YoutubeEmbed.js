import React, {useState, useRef, useEffect} from "react";
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import {useSelector, connect, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";

import "./YoutubeEmbed.css";

//https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
// please note that
const YoutubeEmbedComp = () => {
  const [embedId, setEmbedId] = useState("");
  const ytEmbed = useSelector((state) => state.ytEmbed);

  useEffect(() => {
    if (ytEmbed.ytEmbedId && !ytEmbed.loading) {
      setEmbedId(ytEmbed.ytEmbedId)
    }
    return function() {
      
    }
  }, [])

  return (
    <NodeViewWrapper className="react-component-with-content">
    <NodeViewContent>
      <div className="video-responsive">
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          href={`https://www.youtube.com/watch?v=${embedId}`}
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
      </NodeViewContent>
    </NodeViewWrapper>
  );
};

const YoutubeEmbed = connect(null, null)(YoutubeEmbedComp);

export default YoutubeEmbed;
