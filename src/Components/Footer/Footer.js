import React from "react";

//Icons from FontAwesome but not relying on their library
import { ReactComponent as ReactIcon } from "../../data/photos/frontend/icons/react.svg";
import { ReactComponent as PiedPiperIcon } from "../../data/photos/frontend/icons/piedPiper.svg";
import { ReactComponent as GithubIcon } from "../../data/photos/frontend/icons/github.svg";
import { ReactComponent as DiscordIcon } from "../../data/photos/frontend/icons/discord.svg";
import { ReactComponent as LinkedInIcon } from "../../data/photos/frontend/icons/linkedIn.svg";
import { ReactComponent as Css3 } from "../../data/photos/frontend/icons/css3.svg";
import { ReactComponent as TwitterIcon } from "../../data/photos/frontend/icons/twitterUncaged.svg";
import { ReactComponent as JavascriptIcon } from "../../data/photos/frontend/icons/javascript.svg";
import { ReactComponent as SassIcon } from "../../data/photos/frontend/icons/sass.svg";
import { ReactComponent as EnvelopeIcon } from "../../data/photos/frontend/icons/envelope.svg";
import { ReactComponent as Html5Icon } from "../../data/photos/frontend/icons/html5.svg";

import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footerWrapper pad5">
      <div>
        <h3>Contact Info</h3>
        <span className="pad1">
          <div class="envelopeIcon">gdsojgoas</div>
          <p>Email:</p>
          <a
            className="plainLink"
            href="mailto:rosalindavalbrecht@gmail.com?subject=I am interested in..."
          >
            rosalindavalbrecht@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
