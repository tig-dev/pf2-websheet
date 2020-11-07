import React, { useState, useMemo } from "react";
import { Button, Descriptions } from "antd";
import { EditFilled, CheckOutlined } from "@ant-design/icons";

import "./character.less";
import CharacterInfo from "./character-info";
import CharacterDetails from "./character-details";
import { WithReducerProps } from "../common/interfaces";

export interface CharacterProps extends WithReducerProps {}

function Character({ state, dispatch }: CharacterProps) {
  const [editing, setEditing] = useState<boolean>(false);

  const editButton = useMemo<JSX.Element>(() => {
    if (!editing) {
      return (
        <Button
          type={"primary"}
          className={"blue-button"}
          icon={<EditFilled />}
          onClick={() => setEditing(true)}
        />
      );
    } else {
      return (
        <Button
          type={"primary"}
          className={"green-button"}
          icon={<CheckOutlined />}
          onClick={() => setEditing(false)}
        />
      );
    }
  }, [editing, setEditing]);

  return (
    <div className={"character-content"}>
      <Descriptions className={"character-title"} title={state.character.name} extra={editButton} />
      <CharacterInfo state={state} dispatch={dispatch} />
      <CharacterDetails state={state} dispatch={dispatch} />
    </div>
  );
}

export default Character;
