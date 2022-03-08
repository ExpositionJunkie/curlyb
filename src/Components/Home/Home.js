import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import { NavLink } from "react-router-dom";
import rozNetrunner from "../../data/photos/Roz/profilePhotos/netrunner2.jpg";
import apolloGlamour from "../../data/photos/Apollo/ApolloGlamourShot.jpg";
import "./Home.css";

export function Home(props) {
  return (
    <div className="homeWrapper">
      <div className="header">
        <Title titleStr="Home" />
      </div>
      <div className="intro">
        <h1 id="hiRoz">Hi, I'm Roz.</h1>
        <span id="topIntro" className="introSpan">
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
            <h3 id="drop">
              <a
                className="plainLink"
                href="mailto:rosalindavalbrecht@gmail.com?subject=I am interested in giving you money to do a thing you like"  
              >
                Drop me a line
              </a>
            </h3>
          </span>
        </span>
        <Line />
        <span id="hobbiesIntro" className="introSpan pad3">
          <span className="hobbies">
            <h2>Hobbies include</h2>
            <h3>
              Cyberpunk RED, D&#38;D, FFXIV, SWTOR, backpacking, wire wrapping,
              painting, epoxy, candlemaking, cosplay, walking the good boy in
              the photo, and having money to eat!
            </h3>
            <h3>(Hire me!)</h3>
          </span>
          <span className="introPic">
            <img
              id="apollo"
              src={apolloGlamour}
              alt="Handsome border collie named Apollo squinches into the camera. He is a good boy. We currently enjoy a working relationship but he does not code very well."
            />
          </span>
        </span>
        <Line />
        <div className="stackWrap pad3">
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
            <li className="sl">Figma (Wireframing)</li>
            <li className="sl">Requirements Gathering</li>
            <li className="sl">VBA</li>
          </div>
        </div>
      </div>
      <Line />
      <div className="pad2">
      <div className="intro goals">
        <h1>Site Goals</h1>
        <h3>
          For most recent updates and snarky dev commentary, please check out my{" "}
          <NavLink to="/blog">Dev Blog</NavLink>.
        </h3>
        <p>Near Future Attainables:</p>
        <ul>
          <li>Blog Facelift</li>
          <li>
            Updates to existing API practice projects to build more robust
            examples
          </li>
        </ul>
        <p>Written but having technical difficulties hosting:</p>
        <ul>
          <li>Backend</li>
          <li>Login ability</li>
          <li>Ability for users to post blogs and comment</li>
        </ul>
        <p>Pie in the Sky Goals</p>
        <ul>
          <li>
            Language Translation Support - Lofty Stretch Goal - infrastructure
            in place but difficult to do automated and at scale until backend
            installed properly
          </li>
        </ul>
      </div>
      </div>
      <Line />
    </div>
  );
}
