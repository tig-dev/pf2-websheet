import React, {useCallback, useMemo, useState} from "react";
import {Button, Form, Input, InputNumber, Select, Popover, Tooltip} from "antd";
import {cloneDeep, map, startCase, uniqBy, assignIn} from "lodash";
import {PlusOutlined, CheckOutlined} from "@ant-design/icons";

import {CharacterFormTabProps} from "../../common/interfaces";
import {trainingType} from "../../common/types";

const {Option} = Select;

const CharacterFormDetails = ({state, dispatch}: CharacterFormTabProps) => {
  const {character} = state;
  const [popVisible, setPopVisible] = useState<boolean>(false);

  const weaponSelect = useCallback((): JSX.Element => {
    return (
      <Select defaultValue={"U"}>
        <Option value={"U"}>Untrained</Option>
        <Option value={"T"}>Trained</Option>
        <Option value={"E"}>Expert</Option>
        <Option value={"M"}>Master</Option>
        <Option value={"L"}>Legendary</Option>
      </Select>
    );
  }, []);

  const addWeaponProf = useCallback((name: string): void => {
    let newChar = cloneDeep(character)
    const newProf: trainingType = {
      name: name.toLowerCase(),
      training: "U"
    }
    newChar.details.weapon_training = uniqBy([...cloneDeep(character.details.weapon_training), newProf], "name");
    newChar = assignIn(newChar, {[`weapon_training_${name.toLowerCase()}`]: "U"})

    dispatch({
      type: "CHARACTER",
      payload: newChar,
    })
  },[character, dispatch])

  const weaponButton = useMemo(() => {
    if(character.details.weapon_training.length >= 5) {
      return (
        <Tooltip title={"No more proficiencies can be added."}>
          <Button icon={<PlusOutlined/>} disabled={true} type={"primary"} size={"small"} className={"blue-button"}>Add</Button>
        </Tooltip>
      )
    } else {
      return (
        <Popover
          visible={popVisible}
          content={<Input.Search
            size={"large"}
            onSearch={(value) => {
              addWeaponProf(value);
              setPopVisible(false);
            }}
            style={{borderRadius: "4px"}}
            placeholder={"Proficiency name"}
            enterButton={
              <Button
                type={"primary"}
                className={"green-button"}
                icon={<CheckOutlined/>}
              />
            }
          />}
        >
          <Button
            icon={<PlusOutlined/>}
            onClick={() => setPopVisible(true)}
            type={"primary"}
            size={"small"}
            className={"blue-button"}
          >
            Add
          </Button>
        </Popover>
      )
    }
  }, [character.details.weapon_training, popVisible, addWeaponProf])

  const weaponProficiencies = useMemo(() => (
    <Input.Group className={"form-item-group"}>
      <span className={"item-group-header"}>
        Weapon Proficiencies
        {weaponButton}
      </span>
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
  ), [character.details.weapon_training, weaponSelect, weaponButton])

  return (
    <div className={"char-tab-content form-details"}>
      <div className={"form-details-col"}>
        <Form.Item key={"form-level"} label={"Level"} name={["details", "level"]}>
          <InputNumber min={1} max={20}/>
        </Form.Item>
        <Form.Item key={"form-exp"} label={"Experience"} name={["details", "exp"]}>
          <InputNumber min={0} max={999}/>
        </Form.Item>
        <Form.Item
          key={"form-hero-points"}
          label={"Hero Points"}
          name={["details", "hero_points"]}
        >
          <InputNumber min={0} max={3}/>
        </Form.Item>
        <Form.Item key={"form-size"} label={"Size"} name={["details", "size"]}>
          <Select>
            <Option value={"small"}>Small</Option>
            <Option value={"medium"}>Medium</Option>
            <Option value={"large"}>Large</Option>
          </Select>
        </Form.Item>
        <Form.Item
          key={"form-languages"}
          label={"Languages"}
          name={["details", "languages"]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          key={"form-alignment"}
          label={"Alignment"}
          name={["details", "alignment"]}
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
        <Form.Item key={"form-traits"} label={"Traits"} name={["details", "traits"]}>
          <Input/>
        </Form.Item>
      </div>
      <div className={"form-details-col"}>
        {weaponProficiencies}
      </div>
      <div className={"form-details-col"}>
        <Form.Item
          key={"form-strength"}
          label={"Strength"}
          name={["details", "abilities", "strength"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
        <Form.Item
          key={"form-dexterity"}
          label={"Dexterity"}
          name={["details", "abilities", "dexterity"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
        <Form.Item
          key={"form-constitution"}
          label={"Constitution"}
          name={["details", "abilities", "constitution"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
        <Form.Item
          key={"form-intelligence"}
          label={"Intelligence"}
          name={["details", "abilities", "intelligence"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
        <Form.Item
          key={"form-wisdom"}
          label={"Wisdom"}
          name={["details", "abilities", "wisdom"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
        <Form.Item
          key={"form-charisma"}
          label={"Charisma"}
          name={["details", "abilities", "charisma"]}
        >
          <InputNumber min={6} max={30}/>
        </Form.Item>
      </div>
    </div>);
}

export default CharacterFormDetails;
