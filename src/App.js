import React, { useState, Suspense, useEffect } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
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
                <Route path="/" element={<Home />} />
                <Route path="apipractice" element={<APIPractice />} />
                <Route path="blog" element={<Blog />} />
                <Route path="nameguesser" element={<NameGuess />} />
                <Route path="nasapower" element={<NASAPower />} />
                <Route path="isslocator" element={<ISSLocator />} />
                <Route path="dnd" element={<DungeonsAndDragons />} />
                <Route path="ip" element={<IPAddress />} />
                <Route path="signup" element={<Signup />} />
              </Routes>
            </div>
          </header>
        </Suspense>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
