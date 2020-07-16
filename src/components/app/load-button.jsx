import React, { useState } from "react";
import { keys, isEqual, map } from "lodash";
import { Button, Select, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { InitMainState } from "./reducer";

const { Option } = Select;
const { confirm } = Modal;

const LoadButton = ({ state, dispatch }) => {
  const [loadVisible, setLoadVisible] = useState(false);
  const [toLoadName, setToLoadName] = useState("");

  const loadChar = () => {
    if(toLoadName) {
      dispatch({
        type: 'LOAD',
        payload: JSON.parse(localStorage[toLoadName])
      })
    } else {
      message.error("No character selected!")
    }
  };

  const handleOk = () => {
    setLoadVisible(false);
    if (!isEqual(state, InitMainState)) {
      confirm({
        title: "Do you want to override the current character?",
        icon: <ExclamationCircleOutlined />,
        content: "You will lose any unsaved changes.",
        okText: "Override",
        onOk() {
          loadChar();
        },
      });
    } else {
      loadChar();
    }
  };

  const handleOpenModal = () => {
    if (keys(localStorage).length === 0) {
      message.info("No characters to load.");
    } else {
      setLoadVisible(true);
    }
  };

  return (
    <div>
      <Button
        type={"primary"}
        className={"blue-button"}
        size={"small"}
        onClick={handleOpenModal}
      >
        Load
      </Button>
      <Modal
        title={"Load Character"}
        visible={loadVisible}
        closable={false}
        onOk={handleOk}
        okText={"Load"}
        onCancel={() => setLoadVisible(false)}
      >
        <Select
          placeholder={"Select a character"}
          onChange={(value) => setToLoadName(value)}
        >
          {map(keys(localStorage), (name) => {
            return <Option key={name} value={name}>{name}</Option>;
          })}
        </Select>
      </Modal>
    </div>
  );
};

export default LoadButton;
