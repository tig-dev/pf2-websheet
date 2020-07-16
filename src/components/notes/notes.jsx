import React from "react";

import GeneralNotes from "./notes-general";
import OtherNotes from "./notes-other";
import './notes.less';

const Notes = ({ state, dispatch }) => {
  return (
    <div className={"notes-content"}>
      <GeneralNotes state={state} dispatch={dispatch} />
      <OtherNotes state={state} dispatch={dispatch} />
    </div>
  );
}

export default Notes;
