import React from "react";
import { map } from "lodash";
import { Descriptions } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

import CharacterPortrait from "./character-portrait";
import { WithReducerProps } from "../common/interfaces";
import WeaponProf from "../common/components/weapon-prof";
import { trainingType } from "../common/types";
import { getAbilityMod as getMod } from "../common/utils";

export interface CharacterDetailsProps extends WithReducerProps {}

function CharacterDetails({ state, dispatch }: CharacterDetailsProps) {
  const {
    abilities,
    languages,
    weapon_training,
    traits,
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
    <div className={"character-details"}>
      <CharacterPortrait state={state} dispatch={dispatch} />
      <Descriptions
        className={"details-top"}
        column={6}
        size={"small"}
        bordered={true}
        layout={"vertical"}
      >
        <DescriptionsItem className={"details-score"} label={"STR"}>
          {str}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score"} label={"DEX"}>
          {dex}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score"} label={"CON"}>
          {con}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score"} label={"INT"}>
          {int}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score"} label={"WIS"}>
          {wis}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score"} label={"CHA"}>
          {cha}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(str)}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(dex)}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(con)}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(int)}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(wis)}
        </DescriptionsItem>
        <DescriptionsItem className={"details-score-mod"}>
          {getMod(cha)}
        </DescriptionsItem>
        <DescriptionsItem label={"Languages"} span={3}>
          {languages}
        </DescriptionsItem>
        <DescriptionsItem label={"Traits"} span={3}>
          {traits}
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
  );
}

export default CharacterDetails;
