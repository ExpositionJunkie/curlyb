import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import {NavLink} from "react-router-dom";
import { initGA } from "./ga-utils";
import "./Cookie.css"


//https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
export default function Cookie() {
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  const handleAcceptCookie = () => {
    console.log(window.gtag)
    if (process.env.GA) {
      initGA(window.gtag, process.env.GA);
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
      disableButtonStyles={true}
      enableDeclineButton
      expires={999} 
      overlay
      cookieSecurity={true}
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      containerClasses="cookie-dialog"
      contentClasses="cookie-text"
      buttonWrapperClasses="button-wrap"
      buttonClasses="accept-button shadow-box"
      declineButtonClasses="decline-button shadow-box"
    >
      <p>
      This website uses third party cookies from Google Analytics to enhance
      user experience.
      For information regarding cookie usage, please refer to CB's <NavLink to="/csp">Cookie Security Policy Documentation</NavLink></p>
    </CookieConsent>
    </div>
    </div>
  );
}
