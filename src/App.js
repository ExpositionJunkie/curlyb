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
import Blog from "./Components/Blog/Blog"
import Language from "./Components/Reusable/Language/Language";
import Loading from "./Components/Reusable/Loading/Loading";
import Greeting from "./Components/Reusable/Greeting/Greeting";
import Paragraph from "./Components/Reusable/Paragraph/Paragraph";
import i18n from "./Language/i18n";
import LocaleContext from "./LocaleContext";
import { Route, Routes } from "react-router-dom";

//Need to read
//https://mattermost.com/blog/avoiding-common-internationalization-mistakes/

//Possibly good when I start setting up the node server but isn't quite what I was hoping for here.
//https://johnresig.com/blog/a-strategy-for-i18n-and-node/

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="apipractice" element={<APIPractice />} />
              <Route path="blog" element={<Blog />} />
              <Route path="nameguesser" element={<NameGuess />} />
              <Route path="nasapower" element={<NASAPower />} />
              <Route path="isslocator" element={<ISSLocator />} />
              <Route path="dnd" element={<DungeonsAndDragons />} />
              <Route path="ip" element={<IPAddress />} />
            </Routes>
          </header>
        </Suspense>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
