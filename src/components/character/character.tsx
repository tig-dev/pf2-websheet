import React, {useState, useEffect} from "react";
import {Button, Descriptions, Tabs, Form} from "antd";
import {assignIn, omit, isNil} from "lodash";
import {EditFilled, CheckOutlined, CloseOutlined} from "@ant-design/icons";

import "./character.less";
import CharacterInfo from "./char-tabs/character-info";
import CharacterDetails from "./char-tabs/character-details";
import CharacterStory from "./char-tabs/character-story";
import CharacterForm from "./character-form";
import {WithReducerProps} from "../common/interfaces";
import {trainingType} from "../common/types";
import {getSessionChar} from "../common/utils";

const {TabPane} = Tabs;

export interface CharacterProps extends WithReducerProps {
}

const Character = ({state, dispatch}: CharacterProps) => {
  const [form] = Form.useForm();
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    dispatch({
      type: "SAVE",
    })
  }, [dispatch])

  const handleFormSave = (): void => {
    let newChar = form.getFieldsValue();
    let portrait = state.character.info.portrait;

    // TODO: dynamic proficiency setting
    const weapProf: trainingType[] = [
      {
        name: "simple",
        training: newChar["weapon_training_simple"],
      },
      {
        name: "martial",
        training: newChar["weapon_training_martial"],
      },
      {
        name: "unarmed",
        training: newChar["weapon_training_unarmed"],
      },
    ];
    newChar = omit(
      newChar,
      "weapon_training_simple",
      "weapon_training_martial",
      "weapon_training_unarmed",
    );
    if(isNil(newChar.details)) {
      newChar = assignIn(newChar, {details: {}})
    }
    newChar.details = assignIn(newChar.details, {weapon_training: weapProf});
    newChar.info = assignIn(newChar.info, {portrait: portrait})

    dispatch({
      type: "CHARACTER",
      payload: {
        info: assignIn(state.character.info, newChar.info),
        details: assignIn(state.character.details, newChar.details),
        story: newChar.story ? newChar.story : state.character.story,
      },
    });
    setEditing(false);
  }

  const handleFormCancel = () => {
    dispatch({
      type: "LOAD",
      payload: getSessionChar(),
    });
    setEditing(false);
  }

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
              icon={<EditFilled/>}
              onClick={() => setEditing(true)}
            />
          }
        />
        <Tabs
          className={"character-tabs"}
          defaultActiveKey={"1"}
          size={"large"}
        >
          <TabPane tab={"Info"} key={"1"}>
            <CharacterInfo state={state} dispatch={dispatch}/>
          </TabPane>
          <TabPane tab={"Details"} key={"2"}>
            <CharacterDetails state={state} dispatch={dispatch}/>
          </TabPane>
          <TabPane tab={"Story"} key={"3"}>
            <CharacterStory state={state} dispatch={dispatch}/>
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
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <Button
                type={"primary"}
                className={"red-button"}
                size={"large"}
                icon={<CloseOutlined/>}
                onClick={handleFormCancel}
              />
              <Button
                style={{marginLeft: "10px"}}
                type={"primary"}
                className={"green-button"}
                size={"large"}
                icon={<CheckOutlined/>}
                onClick={handleFormSave}
              />
            </div>
          }
        />
        <CharacterForm
          form={form}
          setEditing={setEditing}
          state={state}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

export default Character;
