import React from "react";
import Line from "../Reusable/Line/Line";
//Icons from FontAwesome but not relying on their library
import { ReactComponent as ReactIcon } from "../../data/photos/frontend/icons/react.svg";
import { ReactComponent as PiedPiperIcon } from "../../data/photos/frontend/icons/piedPiper.svg";
import { ReactComponent as GithubIcon } from "../../data/photos/frontend/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../data/photos/frontend/icons/linkedIn.svg";
import { ReactComponent as Css3 } from "../../data/photos/frontend/icons/css3.svg";
import { ReactComponent as TwitterIcon } from "../../data/photos/frontend/icons/twitterUncaged.svg";
import { ReactComponent as JavascriptIcon } from "../../data/photos/frontend/icons/javascript.svg";
import { ReactComponent as SassIcon } from "../../data/photos/frontend/icons/sass.svg";
import { ReactComponent as EnvelopeIcon } from "../../data/photos/frontend/icons/envelope.svg";
import { ReactComponent as Html5Icon } from "../../data/photos/frontend/icons/html5.svg";
import { NavLink } from "react-router-dom";

import "./Footer.css";

//reading for when I add symbols: https://fontawesome.com/v6/docs/web/add-icons/svg-symbols

export default function Footer(props) {
  return (
    <div className="footerWrapper">
      <div>
        <span className="spanWrap marg4">
          <span className="contactWrap">
            <span className="contactLink">
              <a
                className="plainLink"
                href="mailto:rosalindavalbrecht@gmail.com?subject=I am interested in..."
              >
                <EnvelopeIcon />
                <div className="contactLabel">
                  <p>Email:</p>
                  <p>rosalindavalbrecht@gmail.com</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://github.com/ExpositionJunkie"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                <div className="contactLabel">
                  <p>Github:</p>
                  <p>github.com/ExpositionJunkie</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://www.linkedin.com/in/rozalbrecht/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <div className="contactLabel">
                  <p>LinkedIn:</p>
                  <p>linkedin.com/in/rozalbrecht</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://twitter.com/Zenith_zer"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
                <div className="contactLabel">
                  <p>Twitter:</p>
                  <p>twitter.com/Zenith_zer</p>
                </div>
              </a>
            </span>
          </span>
          <span className="techStack ">
            <div>
              <h2>Site brought to you by</h2>
              <div className="icons">
                <ReactIcon />
                <JavascriptIcon />
                <Html5Icon />
                <Css3 />
                <SassIcon />

                <NavLink to="/egg">
                  <PiedPiperIcon width="55px" height="auto" />
                </NavLink>
                
              </div>
              
            </div>
            
          </span>
        </span>

        <span><div className="lineDiv">
                  <Line />
                </div></span>
      </div>
    </div>
  );
}
