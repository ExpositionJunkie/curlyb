import React, { Suspense } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Egg from "./Components/Reusable/Egg/Egg";
import APIPractice from "./Components/APIPractice/APIPractice";
import NASAPower from "./Components/APIPractice/InnerPages/NASA/NASAPower";
import DungeonsAndDragons from "./Components/APIPractice/InnerPages/DungeonsAndDragons/DungeonsAndDragons";
import ISSLocator from "./Components/APIPractice/InnerPages/ISSLocator/ISSLocator";
import IPAddress from "./Components/APIPractice/InnerPages/IPAddress/IPAddress";
import NameGuess from "./Components/APIPractice/InnerPages/NameGuess/NameGuess";
import Blog from "./Components/Blog/Blog";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

//https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/#:~:text=export%20default%20App%3B,ReactJS%20is%20connected%20with%20NodeJS
//pause in devtools before it can load the overlay to avoid the sign in bs.

//https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain
//for when I get back to this

function App() {

  return (
    <div className="App">
      <Suspense fallback={<p>...Loading</p>}>
        <header className="App-header">
          <Navbar />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="apipractice" element={<APIPractice />} />
              <Route exact path="blog" element={<Blog />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="nameguesser" element={<NameGuess />} />
              <Route exact path="nasapower" element={<NASAPower />} />
              <Route exact path="isslocator" element={<ISSLocator />} />
              <Route exact path="dnd" element={<DungeonsAndDragons />} />
              <Route exact path="ip" element={<IPAddress />} />
              <Route exact path="signup" element={<Signup />} />
              <Route exact path="egg" element={<Egg />} />
            </Routes>
            <Footer />
            <div className="cookie-consent">
              <h1>Hello World!</h1>
              <CookieConsent enableDeclineButton>
                This website uses cookies to enhance the user experience.
              </CookieConsent>
            </div>
          </div>
        </header>
      </Suspense>
    </div>
  );
}

export default App;
