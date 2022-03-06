import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import rozNetrunner from "../../data/photos/Roz/profilePhotos/netrunner2.jpg";
import apolloGlamour from "../../data/photos/Apollo/ApolloGlamourShot.jpg";
import "./Home.css";

export function Home(props) {
  return (
    <div className="homeWrapper">
      <div className="header">
        <Title titleStr="Home" />
        <div className="intro">
          <h1 id="hiRoz">Hi, I'm Roz.</h1>
          <span className="introSpan">
            <span className="introPic">
              <img
                id="netrunner"
                src={rozNetrunner}
                alt="Cosplay Roz with fake tattoos wearing a glowing yellow visor with an atom stenciled in the center. (The react logo is an atom. It seemed fitting.)"
              />
            </span>
            <span className="introText">
              <h2 className="subtitle">
                I'm a fullstack MERN developer with a passion for skill
                collecting.
              </h2>
              <h2 className="subtitle">Like what you see? Need code?</h2>
              <h3 id="drop">Drop me a line</h3>
            </span>
          </span>
          <Line />

          <span className="introSpan">
            <span className="hobbies">
              <h2>Hobbies include</h2>
              <h3>
                Cyberpunk RED, D&#38;D, FFXIV, SWTOR, wire wrapping, painting, epoxy, candlemaking, cosplay, walking the good boy in the photo,
                and having money to eat!
              </h3>
              <h3>(Hire me!)</h3>
            </span>
            <span className="apollo">
              <img
                id="apollo"
                src={apolloGlamour}
                alt="Handsome border collie named Apollo squinches into the camera. He is a good boy. We currently enjoy a working relationship but he does not code very well."
              />
            </span>
          </span>
          <Line />
          <div className="stackWrap">
          <div className="stack">
            <div>
              <span aria-hidden="true">S</span>
              <span aria-hidden="true">S</span>S
            </div>
            <div>
              <span aria-hidden="true">T</span>
              <span aria-hidden="true">T</span>T
            </div>
            <div>
              <span aria-hidden="true">A</span>
              <span aria-hidden="true">A</span>A
            </div>
            <div>
              <span aria-hidden="true">C</span>
              <span aria-hidden="true">C</span>C
            </div>
            <div>
              <span aria-hidden="true">K</span>
              <span aria-hidden="true">K</span>K
            </div>
          </div>
          <div className="stackList">
            <li className="sl">React</li>
            <li className="sl">React Native</li>
            <li className="sl">Mongo & Mongoose</li>
            <li className="sl">Express</li>
            <li className="sl">Node JS</li>
            <li className="sl">Responsive Design</li>
            <li className="sl">Rest API</li>
            <li className="sl">SCSS/SASS</li>
            <li className="sl">Bootstrap & MUI</li>
            <li className="sl">Figma</li>
            <li className="sl">Requirements Gathering</li>
            <li className="sl">VBA</li>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
