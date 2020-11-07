import React, { useState } from "react";
import { keys, isEqual, map } from "lodash";
import { Button, Select, Modal, message, Checkbox } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { mainStateDefault } from "../../common/defaults";
import { WithReducerProps } from "../../common/interfaces";
import { setAndGetDefaultChar, checkIfDefault } from "../../common/utils";

const { Option } = Select;
const { confirm } = Modal;

export interface LoadButtonProps extends WithReducerProps {}

const LoadButton = ({ state, dispatch }: LoadButtonProps) => {
  const [loadVisible, setLoadVisible] = useState<boolean>(false);
  const [toLoadName, setToLoadName] = useState<string>("");
  const [makeDefault, setMakeDefault] = useState<boolean>(false);

  const loadChar = () => {
    if (toLoadName) {
      if (makeDefault) {
        dispatch({
          type: "LOAD",
          payload: setAndGetDefaultChar(toLoadName),
        });
      }
      dispatch({
        type: "LOAD",
        payload: JSON.parse(localStorage[toLoadName]),
      });
    } else {
      message.error("No character selected!");
    }
    setToLoadName("");
  };

  const handleOk = () => {
    setLoadVisible(false);
    if (!isEqual(state, mainStateDefault)) {
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
        <div className={"load-modal"}>
          <Select
            placeholder={"Select a character"}
            onChange={(value: string) => setToLoadName(value)}
          >
            {map(keys(localStorage), (name) => {
              return (
                <Option key={name} value={name}>
                  {name}
                </Option>
              );
            })}
          </Select>
          <Checkbox
            onChange={(e) => setMakeDefault(e.target.checked)}
            disabled={!toLoadName || checkIfDefault(toLoadName)}
          >
            Make this character the default?
          </Checkbox>
        </div>
      </Modal>
    </div>
  );
};

export default LoadButton;
