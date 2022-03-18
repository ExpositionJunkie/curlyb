import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "./ga-utils";
import "./Cookie.css"
//This code is set up so that a user must opt in to recieve the google analytics cookies.
//Helmet is designed to write non traditional html to the head. Also fun fact, made by the NFL.
//https://github.com/nfl/react-helmet

export default function Cookie() {
  //defaults to true for open modal, is closed once user makes choice.
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  const handleAcceptCookie = () => {
    if (process.env.GA) {
      initGA(process.env.GA);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  return (
    <div className="cookie-wrap">
      <div className="inner-cookie-wrap">
    <CookieConsent
      disableStyles={true}
      enableDeclineButton
      expires={999} 
      overlay
      style={{background: "black", color: "white", fontSize: "30px", height: "10%"}}

      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      containerClasses="cookie-dialog"
      contentClasses="cookie-text"
      buttonClasses="accept-button"
      declineButtonClasses="decline-button"
    >
      <p>
      This website uses third party cookies from Google Analytics to enhance
      user experience. You can decline this either by clicking the decline
      button or just by continuing your browsing without selecting anything at all.
      </p>
    </CookieConsent>
    </div>
    </div>
  );
}
