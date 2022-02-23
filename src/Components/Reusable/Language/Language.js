import React, { useState } from "react";
import { supportedLanguages } from "../../../data/supportedLanguage";

export default function Language() {
  const [languages, setLanguages] = useState([...supportedLanguages]);
  //This takes json list of supported languages and turns them into dropdown options

  return (
    <div>
      <form>
        <label htmlFor="language">Choose a language</label>
        <select id="language">
          {languages.map((language) => {
            return (
              <option id={language.id} value={language.langCode}>
                {language.name}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
