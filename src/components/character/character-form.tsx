import React, { useCallback } from "react";
import { Form, Input, Button, Select, InputNumber, Row, Col } from "antd";
import { map, startCase, assignIn, omit } from "lodash";

import { EditStateWithReducerProps } from "../common/interfaces";
import { trainingType } from "../common/types";

export interface CharacterFormProps extends EditStateWithReducerProps {}
const { Option } = Select;
const { TextArea } = Input;

function CharacterForm({ state, dispatch, setEditing }: CharacterFormProps) {
  const [form] = Form.useForm();
  const { character } = state;

  const weaponSelect = useCallback((): JSX.Element => {
    return (
      <Select>
        <Option value={"U"}>Untrained</Option>
        <Option value={"T"}>Trained</Option>
        <Option value={"E"}>Expert</Option>
        <Option value={"M"}>Master</Option>
        <Option value={"L"}>Legendary</Option>
      </Select>
    );
  }, []);

  const flatterChar: any = assignIn(
    omit(character, "details.weapon_training"),
    ...map(character.details.weapon_training, (prof: trainingType) => {
      return { [`weapon_training_${prof.name}`]: prof.training };
    })
  );

  return (
    <Form
      className={"character-form"}
      form={form}
      initialValues={flatterChar}
      layout={"vertical"}
      size={window.innerHeight > 800 ? "middle" : "small"}
      wrapperCol={{ offset: 1 }}
      colon={true}
    >
      <Row gutter={15}>
        <Col span={6}>
          <Form.Item
            key={"form-name"}
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
          <Form.Item key={"form-ancestry"} label={"Ancestry"} name={"ancestry"}>
            <Input />
          </Form.Item>
          <Form.Item key={"form-heritage"} label={"Heritage"} name={"heritage"}>
            <Input />
          </Form.Item>
          <Form.Item
            key={"form-background"}
            label={"Background"}
            name={"background"}
          >
            <Input />
          </Form.Item>
          <Form.Item key={"form-size"} label={"Size"} name={"size"}>
            <Select>
              <Option value={"small"}>Small</Option>
              <Option value={"medium"}>Medium</Option>
              <Option value={"large"}>Large</Option>
            </Select>
          </Form.Item>
          <Form.Item
            key={"form-languages"}
            label={"Languages"}
            name={"languages"}
          >
            <Input />
          </Form.Item>
          <Form.Item key={"form-diety"} label={"Diety"} name={"diety"}>
            <Input />
          </Form.Item>

          <Form.Item
            key={"form-alignment"}
            label={"Alignment"}
            name={"alignment"}
          >
            <Select>
              <Option value="LG">Lawful Good</Option>
              <Option value="NG">Neutral Good</Option>
              <Option value="CG">Chaotic Good</Option>
              <Option value="LN">Lawful Neutral</Option>
              <Option value="N">True Neutral</Option>
              <Option value="CN">Chaotic Neutral</Option>
              <Option value="LE">Lawful Evil</Option>
              <Option value="NE">Neutral Evil</Option>
              <Option value="CE">Chaotic Evil</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item key={"form-class"} label={"Class"} name={"class"}>
            <Input />
          </Form.Item>
          <Form.Item key={"form-level"} label={"Level"} name={"level"}>
            <InputNumber min={1} max={20} />
          </Form.Item>
          <Form.Item key={"form-exp"} label={"Experience"} name={"exp"}>
            <InputNumber min={0} max={999} />
          </Form.Item>
          <Form.Item
            key={"form-hero-points"}
            label={"Hero Points"}
            name={"hero_points"}
          >
            <InputNumber min={0} max={3} />
          </Form.Item>
          <Form.Item key={"form-traits"} label={"Traits"} name={"traits"}>
            <Input />
          </Form.Item>
          <Input.Group className={"character-form-weapons"}>
            <span id={"form-weapons-head"}>Weapon Proficiences</span>
            {map(character.details.weapon_training, (prof: trainingType) => {
              return (
                <Form.Item
                  key={`form-${prof.name}`}
                  label={startCase(prof.name)}
                  name={`weapon_training_${prof.name}`}
                >
                  {weaponSelect()}
                </Form.Item>
              );
            })}
          </Input.Group>
        </Col>
        <Col span={4}>
          <Form.Item
            key={"form-strength"}
            label={"Strength"}
            name={["abilities", "strength"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
          <Form.Item
            key={"form-dexterity"}
            label={"Dexterity"}
            name={["abilities", "dexterity"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
          <Form.Item
            key={"form-constitution"}
            label={"Constitution"}
            name={["abilities", "constitution"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
          <Form.Item
            key={"form-intelligence"}
            label={"Intelligence"}
            name={["abilities", "intelligence"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
          <Form.Item
            key={"form-wisdom"}
            label={"Wisdom"}
            name={["abilities", "wisdom"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
          <Form.Item
            key={"form-charisma"}
            label={"Charisma"}
            name={["abilities", "charisma"]}
          >
            <InputNumber min={6} max={30} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item key={"form-details"} label={"Details"} name={"details"}>
            <TextArea
              autoSize={
                window.innerHeight > 800
                  ? { minRows: 25, maxRows: 25 }
                  : { minRows: 15, maxRows: 15 }
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <div className={"character-form-btn"}>
        <Button
          className={"green-button"}
          size={window.innerHeight > 800 ? "large" : "middle"}
          type={"primary"}
          onClick={() => {
            let newChar = form.getFieldsValue();
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
              "weapon_training_other"
            );
            newChar["weapon_training"] = weapProf;

            dispatch({
              type: "CHARACTER",
              payload: assignIn(character, newChar),
            });
            setEditing(false);
          }}
        >
          Save
        </Button>
      </div>
    </Form>
  );
}

export default CharacterForm;
