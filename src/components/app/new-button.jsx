import React from "react";
import { isEqual } from "lodash";
import { Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { InitMainState } from "./reducer";

const { confirm } = Modal;

const NewButton = ({ state, dispatch }) => {
  const newChar = () => {
    dispatch({ type: "NEW" });
    message.success("Created new character!");
  };

  const handleNew = () => {
    if (!isEqual(state, InitMainState)) {
      confirm({
        title: "Do you want to override the current character?",
        icon: <ExclamationCircleOutlined />,
        content: "You will lose any unsaved changes.",
        okText: "Override",
        onOk() {
          newChar();
        },
      });
    } else {
      message.success("Created new character!");
    }
  };

  return (
    <Button
      type={"primary"}
      className={"red-button"}
      size={"small"}
      onClick={handleNew}
    >
      New
    </Button>
  );
};

export default NewButton;
