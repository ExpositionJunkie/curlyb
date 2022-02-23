import React, { useState } from "react";
import { supportedLanguages } from "../../data/supportedLanguage";

export default function Language() {
  const [languages, setLanguages] = useState([...supportedLanguages]);

  return (
    <div>
      <form>
        <select id="language">
          <option value="EN">Choose a language</option>
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
