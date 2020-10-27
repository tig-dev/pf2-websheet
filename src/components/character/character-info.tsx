import React from "react";

import CharacterPortrait from "./character-portrait";
import { WithReducerProps } from "../common/interfaces";

export interface CharacterInfoProps extends WithReducerProps {}

function CharacterInfo({ state, dispatch }: CharacterInfoProps) {
  return (
  <div className={"character-info"}>
    This is Character Info
    <CharacterPortrait state={state} dispatch={dispatch} />
  </div>
  );
}

export default CharacterInfo;
