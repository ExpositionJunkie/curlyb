import React, { useState, useEffect } from "react";
import { supportedLanguages } from "../../data/supportedLanguage";

export function NavbarHelper({ languages }) {
  if (languages !== typeof undefined) {
    languages.map((language) => {
      return (
        <option id={language.id} value={language.langCode}>
          {language.name}
        </option>
      );
    });
  } else {
    return null;
  }
}

export default function Navbar() {
  const [languages, setLanguages] = useState([...supportedLanguages]);
  const [isLoading, setIsLoading] = useState(true);

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
