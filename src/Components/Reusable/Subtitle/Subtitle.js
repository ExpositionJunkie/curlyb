import React from "react";
import "./Subtitle.css";

export default function Subtitle({ subtitleStr }) {
  return (
    <div className="subtitle_wrapper">
      <div className="page_subtitle">
        <h1>{subtitleStr}</h1>
      </div>
    </div>
  );
}
