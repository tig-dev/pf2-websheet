import React, { useState } from "react";
import { Button, Descriptions } from "antd";
import { EditFilled } from "@ant-design/icons";

import "./character.less";
import CharacterInfo from "./character-info";
import CharacterDetails from "./character-details";
import CharacterForm from "./character-form";
import { WithReducerProps } from "../common/interfaces";

export interface CharacterProps extends WithReducerProps {}

function Character({ state, dispatch }: CharacterProps) {
  const [editing, setEditing] = useState<boolean>(false);

  if (!editing) {
    return (
      <div className={"character-content"}>
        <Descriptions
          className={"character-title"}
          title={state.character.name}
          extra={
            <Button
              type={"primary"}
              className={"blue-button"}
              icon={<EditFilled />}
              onClick={() => setEditing(true)}
            />
          }
        />
        <CharacterInfo state={state} dispatch={dispatch} />
        <CharacterDetails state={state} dispatch={dispatch} />
      </div>
    );
  } else {
    return (
      <div className={"character-content"}>
        <Descriptions
          className={"character-title"}
          title={"Edit Character Information"}
        />
        <CharacterForm
          setEditing={setEditing}
          state={state}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

export default Character;
