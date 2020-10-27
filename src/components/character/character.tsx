import React from "react";

import "./character.less";
import CharacterInfo from "./character-info";
import CharacterDetails from "./character-details";
import { WithReducerProps } from "../common/interfaces";

export interface CharacterProps extends WithReducerProps {}

function Character({ state, dispatch }: CharacterProps) {
  return (
    <div className={"character-content"}>
      {/* NOTE: portrait, name, ancestry, heritage, class, level, exp */}
      <CharacterInfo state={state} dispatch={dispatch} />
      {/* NOTE: hero points, languages, details, weapon proficiencies, ability scores */}
      <CharacterDetails state={state} dispatch={dispatch} />
    </div>
  );
}

export default Character;
