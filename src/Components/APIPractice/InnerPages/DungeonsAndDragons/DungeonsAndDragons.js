import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";

import "./DungeonsAndDragons.css";
//Under construction

//https://www.dnd5eapi.co/

//TODO link the api url to the spell

export function SearchDandD({ filteredList }) {
  if (filteredList.length > 0) {
    return (
      <div>
        <h2>Spell Search Results</h2>
        <h3>Matching Spells:</h3>
        {filteredList.map((spell) => {
          return (
            <div key={spell.index}>
              <p>{spell.name}</p>
              <p>
                Api link:
                <a> {spell.url}</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h3>Enter Search Term to See Matching Spells</h3>;
  }
}

export function Spells({ searchTerm }) {
  const [isLoading, setIsLoading] = useState(true);
  const [queryUrl, setQueryUrl] = useState(
    "https://www.dnd5eapi.co/api/spells"
  );
  const [spells, setSpells] = useState({ spells: "" });
  const [filteredSpells, setFilteredSpells] = useState([]);

  useEffect(() => {
    fetch(queryUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSpells({ spells: result.results });
        console.log("spells", spells);
        setIsLoading(false);
      });
    if (searchTerm && spells.spells) {
      setFilteredSpells(
        spells.spells.filter((spell) => spell.index.includes(searchTerm))
      );
      console.log("filtered spells", filteredSpells);
    }
  }, [searchTerm]);

  if (isLoading) {
    return <p>...Loading</p>;
  } else {
    return (
      <div className="dnd_spells">
        <SearchDandD filteredList={filteredSpells} />
        <h2>All Spells</h2>
        {spells.spells.map((spell) => {
          return <p key={spell.index}>{spell.index}</p>;
        })}
      </div>
    );
  }
}

export default function DungeonsAndDragons() {
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [queryUrl, setQueryUrl] = useState("");
  const [input, setInput] = useState({ spellSearch: "" });

  const handleSubmit = (evt) => {
    if (!submitTrigger) {
      setSubmitTrigger(true);
    } else {
      setSubmitTrigger(false);
      setSubmitTrigger(true);
    }
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  return (
    <div className="dnd_wrapper">
      <Title titleStr="Dungeons and Dragons Spells" />
      <div className="dnd_explanation">
        <h2>
          The API providing this as well as a wealth of D and D resources not
          shown here can be found at{" "}
          <a href="https://www.dnd5eapi.co/" target="_blank" rel="noreferrer">
            this link
          </a>
          .
        </h2>
        <h3>
          I had no idea this was available and it is a lovely resource for the
          tabletop nerds in your life and probably a gateway drug to programming
          for more than a few programmers.
        </h3>
        <h3>
          Once I have more time, I do intend on pulling in just aobut all of
          this data, simply becasue it is handy to have.
        </h3>
        <h4>
          (However, I do believe that refactoring to keep things DRY will
          probably take precedence in this case.)
        </h4>
        <h5>
          (I will add the other modifiers on Monday but don't have the time to
          do this at the current time. -2/19/2022)
        </h5>
      </div>
      <div className="dnd_search_form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>
            <label htmlFor="spellSearch">Search Spells</label>
          </span>
          <span>
            <input
              type="text"
              id="spellSearch"
              value={input.spellSearch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </span>
        </form>
      </div>
      <Spells searchTerm={input.spellSearch} />
    </div>
  );
}
