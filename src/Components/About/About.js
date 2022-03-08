import React from "react";
import Title from "../Reusable/Title/Title";
import "./About.css";

export default function About(props) {
  return (
    <div className="aboutWrapper">
      <Title titleStr="About" />
      <div className="innerAboutWrapper">
        <div className="headline">
          <h1>
            Curly Brackets is a portfolio website and dev blog programmed and
            designed by Roz Albrecht. (Me!)
          </h1>
        </div>
        <div className="aboutBody">
          <p>
            Roz hopes to be adopted by a nerdy dev team who will respect my
            audacity, tenacity, and video game references. I am housebroken and
            play well with others.
          </p>
          <p>
            What I lack in experience, I make up for in moxxy and
            resourcefulness.
          </p>
          <p>I like my martinis like I like my programming - DRY.</p>
        </div>
        <div>
            <p>I was raised on 7 inch floppies and windows 3.1. My father was an electronics design engineer who worked on semiconductor design into the mid 2000s and programmed on punch cards. Unfortunately, I wouldn't discover that I enjoyed programming until after he died. Maybe some of that silicon runs in the blood or maybe I've just spent too much time hanging around devs and had the hubris to give it a shot. Either way, I took to it in a way I didn't expect.</p>
        </div>
      </div>
    </div>
  );
}
