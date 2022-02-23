import React, { useState, Suspense, useEffect } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import Language from "./Components/Reusable/Language/Language";
import Loading from "./Components/Reusable/Loading/Loading";
import Greeting from "./Components/Reusable/Greeting/Greeting";
import Paragraph from "./Components/Reusable/Paragraph/Paragraph";
import i18n from "./Language/i18n";
import LocaleContext from "./LocaleContext";

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
            <div>
              <Greeting />
              <Paragraph />
            </div>
            <Suspense fallback={<Loading />}>
              <Language />
            </Suspense>
          </header>
        </Suspense>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
