import React from "react";
import "./Loading.css"
//TODO add animation

export default function Loading() {
  return (
  <div className="loading-wrap"><div className="loader"></div><div className="loading-text">Loading...</div></div>
  );
}
