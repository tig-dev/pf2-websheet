import React from "react";
import { isEqual } from "lodash";
import { Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { mainStateDefault } from "../../common/defaults";
import { WithReducerProps } from "../../common/interfaces";

const { confirm } = Modal;

export interface NewButtonProps extends WithReducerProps {}

const NewButton = ({ state, dispatch }: NewButtonProps) => {
  const newChar = () => {
    dispatch({ type: "NEW" });
    message.success("Created new character!");
  };

  const handleNew = () => {
    if (!isEqual(state, mainStateDefault)) {
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
