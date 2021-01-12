import React from "react";
import { map, startCase } from "lodash";
import { Descriptions } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

import CharacterPortrait from "../character-portrait";
import { WithReducerProps } from "../../common/interfaces";
import WeaponProf from "../../common/components/weapon-prof";
import { trainingType } from "../../common/types";
import { getAbilityMod as getMod } from "../../common/utils";

export interface CharacterDetailsProps extends WithReducerProps {}

const CharacterDetails = ({ state, dispatch }: CharacterDetailsProps) => {
  const { class: charClass } = state.character.info;
  const {
    traits,
    alignment,
    size,
    level,
    exp,
    hero_points,
    languages,
    abilities,
    weapon_training,
  } = state.character.details;
  const {
    strength: str,
    dexterity: dex,
    constitution: con,
    intelligence: int,
    wisdom: wis,
    charisma: cha,
  } = abilities;

  return (
    <div className={"char-tab-content"}>
      <div className={"char-tab-top"}>
        <CharacterPortrait state={state} dispatch={dispatch} />
        <Descriptions bordered={true} column={3} layout={"vertical"}>
          <DescriptionsItem label={"Class"}>{charClass}</DescriptionsItem>
          <DescriptionsItem label={"Level"}>{level}</DescriptionsItem>
          <DescriptionsItem label={"Experience"}>{exp}</DescriptionsItem>
          <DescriptionsItem label={"Hero Points"}>
            {hero_points}
          </DescriptionsItem>
          <DescriptionsItem label={"Alignment"}>{alignment}</DescriptionsItem>
          <DescriptionsItem label={"Size"}>{startCase(size)}</DescriptionsItem>
        </Descriptions>
      </div>
      <div className={"char-tab-bottom"}>
        <Descriptions bordered={true} column={6} layout={"vertical"}>
          <DescriptionsItem
            label={"Strength"}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{str}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(str)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem
            label={"Intellect"}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{int}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(int)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem
            label={"Dexterity"}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{dex}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(dex)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem label={"Wisdom"} className={"desc-item-with-desc"}>
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{wis}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(wis)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem
            label={"Constitution"}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{con}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(con)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem
            label={"Charisma"}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={2}
              size={"small"}
              layout={"vertical"}
            >
              <DescriptionsItem label={"Score"}>{cha}</DescriptionsItem>
              <DescriptionsItem label={"Mod"}>{getMod(cha)}</DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
          <DescriptionsItem label={"Traits"} span={3}>
            {traits}
          </DescriptionsItem>
          <DescriptionsItem label={"Languages"} span={3}>
            {languages}
          </DescriptionsItem>
          <DescriptionsItem label={"Weapon Proficiences"} span={6}>
            <div className={"details-profs"}>
              {map(weapon_training, (prof: trainingType) => {
                return (
                  <WeaponProf proficiency={prof} key={`prof-${prof.name}`} />
                );
              })}
            </div>
          </DescriptionsItem>
        </Descriptions>
      </div>
    </div>
  );
}

export default CharacterDetails;
