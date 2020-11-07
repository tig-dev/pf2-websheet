import React from "react";
import { Button } from "antd";

import { saveLocalChar } from "../../common/utils";
import { mainStateType } from "../../common/types";

export interface SaveButtonProps {
  state: mainStateType;
}

const SaveButton = ({ state }: SaveButtonProps) => {
  return (
    <Button
      type={"primary"}
      className={"green-button"}
      size={"small"}
      onClick={() => saveLocalChar(state)}
    >
      Save
    </Button>
  );
};

export default SaveButton;
