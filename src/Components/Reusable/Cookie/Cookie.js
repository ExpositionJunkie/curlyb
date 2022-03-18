import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
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
