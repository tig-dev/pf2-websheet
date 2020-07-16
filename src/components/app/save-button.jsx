import React from "react";
import { cloneDeep } from "lodash";
import { Button, message } from "antd";

const SaveButton = ({ state }) => {
  const saveChar = () => {
    localStorage[state.character.name] = JSON.stringify(
      cloneDeep(state)
    );
    message.success("Saved character!");
  };

  return (
    <Button
      type={"primary"}
      className={"green-button"}
      size={"small"}
      onClick={saveChar}
    >
      Save
    </Button>
  );
};

export default SaveButton;
