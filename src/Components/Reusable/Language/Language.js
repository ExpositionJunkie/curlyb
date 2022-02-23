import React, { useState, useContext } from "react";
import { supportedLanguages } from "../../../data/supportedLanguage";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../../LocaleContext";
import i18n from "../../../Language/i18n";

export default function Language() {
  const [languages, setLanguages] = useState([...supportedLanguages]);
  const { t } = useTranslation();
  //This takes json list of supported languages and turns them into dropdown options
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    console.log("l", l);
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  function handleChange(e) {
    console.log(e.target.value);
    changeLocale(e.target.value);
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <label htmlFor="language">{t("language")}</label>
        <select id="language" onChange={(e) => handleChange(e)}>
          {languages.map((language) => {
            return (
              <option
                key={language.id}
                id={language.id}
                value={language.langCode}
                name={language.name}
                nativename={language.nativeName}
              >
                {language.nativeName}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
