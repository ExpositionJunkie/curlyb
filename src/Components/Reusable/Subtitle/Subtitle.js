import React from "react"
import "./Subtitle.css"


export default function Subtitle({titleStr, subtitleStr}) {
  return (
    <div className="subtitle_wrapper">
      <div className="page_subtitle">
        <h1>{titleStr}</h1>
        <h2>{subtitleStr}</h2>
      </div>
    </div>
  )
}