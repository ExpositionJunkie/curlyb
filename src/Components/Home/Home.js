import React from "react";
import Title from "../Reusable/Title/Title";
import rozNetrunner from "../../data/photos/Roz/profilePhotos/netrunner.jpg";
import "./Home.css";

export function Home(props) {
  return (
    <div className="homeWrapper">
      <div className="header">
        <Title titleStr="Home" />
        <div className="intro">
          <span className="introSpan">
            <span className="introPic">
              <img
                id="netrunner"
                src={rozNetrunner}
                alt="Cosplay Roz with fake tattoos wearing a glowing yellow visor with an atom stenciled in the center. (The react logo is an atom. It seemed fitting.)"
              />
            </span>
            <span className="introText">
              <h1 id="hiRoz">Hi, I'm Roz.</h1>
              <h2 className="subtitle">
                I'm a fullstack MERN developer with a passion for skill
                collecting.
              </h2>
              <h2 className="subtitle">Like what you see? Need code?</h2>
              <h3 id="drop">Drop me a line</h3>
            </span>
          </span>
          <span>
              <span id="hobbies">
                  <h2>Hobbies include</h2>
                  <h3>Cyberpunk RED, D&#38;D, and having money for food!</h3>
                  <h3>Hire me!</h3>
                </span>
              <span id=""></span>
          </span>
        </div>
      </div>
    </div>
  );
}
