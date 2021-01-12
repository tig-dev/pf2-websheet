import React from "react";
import {Form, Input} from "antd";

import {CharacterFormTabProps} from "../../common/interfaces";

const {TextArea} = Input;

const CharacterFormStory = ({state, dispatch, form}: CharacterFormTabProps) => {
  return (
    <Form.Item key={"form-story"} name={"story"} className={"char-form-story"}>
      <TextArea
        autoSize={
          window.innerHeight > 800
            ? {minRows: 25, maxRows: 25}
            : {minRows: 15, maxRows: 15}
        }
      />
    </Form.Item>
  );
}

export default CharacterFormStory;
