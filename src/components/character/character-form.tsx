import React from "react";
import { Form, Input, Button, Radio } from "antd";

import { EditStateWithReducerProps } from "../common/interfaces";

export interface CharacterFormProps extends EditStateWithReducerProps {}

function CharacterForm({ state, dispatch, editing }: CharacterFormProps) {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        label={"Name"}
        name={"name"}
        rules={[
          {
            required: true,
            message: "Character needs a name to save properly.",
          },
        ]}
      >
        <Input placeholder={"Please enter a name."} />
      </Form.Item>
      <Form.Item label={"Ancestry"} name={"ancestry"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Heritage"} name={"heritage"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Class"} name={"class"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Background"} name={"background"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Diety"} name={"diety"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Alignment"} name={"alignment"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Traits"} name={"traits"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Level"} name={"level"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Experience"} name={"exp"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Hero Points"} name={"hero_points"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Languages"} name={"languages"}>
        <Input />
      </Form.Item>
      <Form.Item label={"Details"} name={"class"}>
        <Input />
      </Form.Item>
      <Button onClick={() => console.log(form.getFieldsValue())}>Save</Button>
    </Form>
  );
}

export default CharacterForm;
