import React from "react";
import {Form, Input} from "antd";

const CharacterFormInfo = () => {
  return (
    <div className={"char-tab-content form-info"}>
      <Form.Item
        key={"form-name"}
        label={"Name"}
        name={["info", "name"]}
        rules={[
          {
            required: true,
            message: "Character needs a name to save properly.",
          },
        ]}
      >
        <Input placeholder={"Please enter a name."}/>
      </Form.Item>
      <Form.Item
        key={"form-background"}
        label={"Background"}
        name={["info", "background"]}
      >
        <Input/>
      </Form.Item>
      <Form.Item key={"form-height"} label={"Height"} name={["info", "height"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-weight"} label={"Weight"} name={["info", "weight"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-gender"} label={"Gender"} name={["info", "gender"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-pronouns"} label={"Pronouns"} name={["info", "pronouns"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-age"} label={"Age"} name={["info", "age"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-deity"} label={"Deity"} name={["info", "deity"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-ancestry"} label={"Ancestry"} name={["info", "ancestry"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-heritage"} label={"Heritage"} name={["info", "heritage"]}>
        <Input/>
      </Form.Item>
      <Form.Item key={"form-class"} label={"Class"} name={["info", "class"]}>
        <Input/>
      </Form.Item>
      <Input.Group className={"form-item-group"}>
        <span className={"item-group-header"}>Personality</span>
        <Form.Item
          key={"form-attitude"}
          label={"Attitude"}
          name={["info", "personality", "attitude"]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          key={"form-beliefs"}
          label={"Beliefs"}
          name={["info", "personality", "beliefs"]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          key={"form-likes"}
          label={"Likes"}
          name={["info", "personality", "likes"]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          key={"form-dislikes"}
          label={"Dislikes"}
          name={["info", "personality", "dislikes"]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          key={"form-catchphrases"}
          label={"Catchphrases"}
          name={["info", "personality", "catchphrases"]}
        >
          <Input/>
        </Form.Item>
      </Input.Group>
    </div>);
}

export default CharacterFormInfo;
