import React from "react";
import { Form, Tabs } from "antd";
import { FormInstance } from "antd/lib/form";
import { map, assignIn, omit } from "lodash";

import { EditStateWithReducerProps } from "../common/interfaces";
import { trainingType } from "../common/types";
import CharacterFormInfo from "./form-tabs/form-info";
import CharacterFormDetails from "./form-tabs/form-details";
import CharacterFormStory from "./form-tabs/form-story";
import CharacterPortrait from "./character-portrait";

export interface CharacterFormProps extends EditStateWithReducerProps {
  form: FormInstance
}

const { TabPane } = Tabs;

const CharacterForm = ( { state, dispatch, form }: CharacterFormProps ) => {
  const { character } = state;
  const flatterChar: any = assignIn(
    omit(character, "details.weapon_training"),
    ...map(character.details.weapon_training, ( prof: trainingType ) => {
        return { [`weapon_training_${prof.name}`]: prof.training };
      }
    )
  );

  return (
    <Form
      className={"character-form"}
      form={form}
      initialValues={flatterChar}
      layout={"vertical"}
      wrapperCol={{ offset: 1 }}
      colon={true}
    >
      <Tabs className={"character-form-tabs"} defaultActiveKey={"1"} size={"large"}>
        <TabPane tab={"Info"} key={"1"}>
          <CharacterFormInfo/>
        </TabPane>
        <TabPane tab={"Portrait"} key={"2"}>
          <div className={"big-portrait char-tab-content"}>
            <CharacterPortrait state={state} dispatch={dispatch} editing={true}/>
          </div>
        </TabPane>
        <TabPane tab={"Details"} key={"3"}>
          <CharacterFormDetails state={state} dispatch={dispatch} form={form}/>
        </TabPane>
        <TabPane tab={"Story"} key={"4"}>
          <CharacterFormStory state={state} dispatch={dispatch} form={form}/>
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default CharacterForm;
