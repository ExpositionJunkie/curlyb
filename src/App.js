import React, { useState, Suspense, useEffect } from "react";
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
import i18n from "./Language/i18n";
import LocaleContext from "./LocaleContext";
import { Route, Routes } from "react-router-dom";

//https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/#:~:text=export%20default%20App%3B,ReactJS%20is%20connected%20with%20NodeJS
//pause in devtools before it can load the overlay to avoid the sign in bs.

//https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain
//for when I get back to this

function App() {
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  });

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div className="App">
        <Suspense fallback={<p>...Loading</p>}>
          <header className="App-header">
            <Navbar />
            <div className="body">
              <Routes>
                <Route exact path="/" element={<Home />} />
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
            </div>
          </header>
        </Suspense>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
