import React, {useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA, declineGA } from "./ga-utils";
import "./CookieInner.css";

//https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
export default function CookieInner() {

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  const handleAcceptCookie = () => {
    console.log(window.gtag);
    if (process.env.GA) {
      initGA(window.gtag, process.env.GA);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    declineGA(process.env.GA);
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  return (
   
        <CookieConsent
          visible={true}
          disableStyles={true}
          disableButtonStyles={true}
          enableDeclineButton
          expires={365}
          overlay
          hideOnAccept={false}
          cookieSecurity={true}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          sameSite="strict"
          containerClasses="cookie-inner-dialog"
          contentClasses="cookie-inner-text"
          buttonWrapperClasses="inner-button-wrap"
          buttonClasses="inner-accept-button shadow-box"
          declineButtonClasses="inner-decline-button shadow-box"
        >
          <p>This website uses third party cookies from Google Analytics to enhance user experience. You may opt in or out below: </p>
        </CookieConsent>

  );
}
