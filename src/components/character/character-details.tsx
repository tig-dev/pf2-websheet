import React from "react";

import { WithReducerProps } from "../common/interfaces";

export interface CharacterDetailsProps extends WithReducerProps {}

function CharacterDetails({ state, dispatch }: CharacterDetailsProps) {
  return <div className={"character-details"}>This is Character Details</div>;
}

export default CharacterDetails;
