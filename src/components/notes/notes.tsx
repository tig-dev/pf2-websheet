import React from "react";

import "./notes.less";
import GeneralNotes from "./notes-general";
import OtherNotes from "./notes-other";
import { WithReducerProps } from "../common/interfaces";

export interface NotesProps extends WithReducerProps {}

const Notes = ({ state, dispatch }: NotesProps) => {
  return (
    <div className={"notes-content"}>
      <GeneralNotes state={state} dispatch={dispatch} />
      <OtherNotes state={state} dispatch={dispatch} />
    </div>
  );
};

export default Notes;
