import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import workshopRoz from "../../data/photos/Roz/profilePhotos/WorkshopRoz.jpg";
import rozZoltar from "../../data/photos/Roz/profilePhotos/RozZoltar.jpg";
import rozLake from "../../data/photos/Roz/profilePhotos/RozLake.jpg";
import "./About.css";

export default function About(props) {
  return (
    <div className="about-wrapper">
      <Title titleStr="About" />
      <div className="inner-about-wrapper">
        <div className="headline">
          <h2>
            Curly Brackets is a portfolio website and dev blog programmed and
            designed by Roz Albrecht.
          </h2>
        </div>
        <Line></Line>
        <div className="about-img-div">
        <img
          src={workshopRoz}
          alt="Smiling Roz in front of workbench with a galaxy painted on it."
        />
        <img
          src={rozZoltar}
          alt="Comicon Roz dressed as Elizabeth from Bioshock Infinite in 2015."
        />
        <img
          src={rozLake}
          alt="Roz holding up a rock shaped like a heart in front of a lake in Arizona. Sorry, forgot which one."
        />
        </div>
        <Line></Line>
        <div className="about-body">
          <h2>
            Roz hopes to be adopted by a nerdy dev team who will respect my
            audacity, tenacity, and video game references. She is housebroken
            and play well with others.
          </h2>
        </div>
      </div>
    </div>
  );
}
