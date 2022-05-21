import React from "react";
import "./Title.css";

export default function Title({ navStr, titleStr, centerLogo }) {
  //ternary to check for Nav heading so I don't have to rewrite every page previously using a title.
  return (

      <div className="page_title">
    
        {navStr ? <h1 className="nav-title">{navStr}</h1> : <></>}

        <h1 className="location-heading">{titleStr}</h1>
        {centerLogo}
      </div>

  );
}
