import React, { useState } from "react";
import { Button, Descriptions, Tabs } from "antd";
import { EditFilled } from "@ant-design/icons";

import "./character.less";
import CharacterInfo from "./character-info";
import CharacterDetails from "./character-details";
import CharacterStory from "./character-story";
import CharacterForm from "./character-form";
import { WithReducerProps } from "../common/interfaces";

const { TabPane } = Tabs;

export interface CharacterProps extends WithReducerProps {}

function Character({ state, dispatch }: CharacterProps) {
  const [editing, setEditing] = useState<boolean>(false);

  if (!editing) {
    return (
      <div className={"character-content"}>
        <Descriptions
          className={"character-title"}
          title={
            state.character.info.name
              ? state.character.info.name
              : "New character"
          }
          extra={
            <Button
              type={"primary"}
              className={"blue-button"}
              size={"large"}
              icon={<EditFilled />}
              onClick={() => setEditing(true)}
            >
              Edit
            </Button>
          }
        />
        <Tabs
          className={"character-tabs"}
          defaultActiveKey={"1"}
          size={"large"}
        >
          <TabPane tab={"Info"} key={"1"}>
            <CharacterInfo state={state} dispatch={dispatch} />
          </TabPane>
          <TabPane tab={"Details"} key={"2"}>
            <CharacterDetails state={state} dispatch={dispatch} />
          </TabPane>
          <TabPane tab={"Story"} key={"3"}>
            <CharacterStory state={state} dispatch={dispatch} />
          </TabPane>
        </Tabs>
      </div>
    );
  } else {
    return (
      <div className={"character-content"}>
        <Descriptions
          className={"character-title"}
          title={"Edit Character Information"}
          extra={
            <Button
              type={"primary"}
              className={"blue-button"}
              icon={<EditFilled />}
              onClick={() => setEditing(true)}
            />
          }
        />
        {/* TODO: add tabs to match non-editing content */}
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
