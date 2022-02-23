import React, { useState, Suspense, useEffect } from "react";
import "./App.css";

import Language from "./Components/Reusable/Language/Language";
import Loading from "./Components/Reusable/Loading/Loading";
import Greeting from "./Components/Reusable/Greeting/Greeting";
import Paragraph from "./Components/Reusable/Paragraph/Paragraph";
import i18n from "./Language/i18n";
import LocaleContext from "./LocaleContext";

function App() {
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  });

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<Loading />}>
            <div>
              <Greeting />
              <Paragraph />
            </div>
            <Language />
          </Suspense>
        </header>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
