import React from "react";
import { startCase } from "lodash";
import { Descriptions } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

import CharacterPortrait from "./character-portrait";
import { WithReducerProps } from "../common/interfaces";

export interface CharacterInfoProps extends WithReducerProps {}

function CharacterInfo({ state, dispatch }: CharacterInfoProps) {
  const {
    ancestry,
    heritage,
    background,
    class: charClass,
    level,
    exp,
    hero_points,
    size,
    diety,
    alignment,
  } = state.character;

  return (
    <div className={"character-info"}>
      <CharacterPortrait state={state} dispatch={dispatch} />
      <Descriptions className={"info-fields"} bordered={true} size={"small"} column={2}>
        <DescriptionsItem label={"Level"}>{level}</DescriptionsItem>
        <DescriptionsItem label={"Class"}>{charClass}</DescriptionsItem>
        <DescriptionsItem label={"Ancestry"}>{ancestry}</DescriptionsItem>
        <DescriptionsItem label={"Heritage"}>{heritage}</DescriptionsItem>
        <DescriptionsItem label={"Background"}>{background}</DescriptionsItem>
        <DescriptionsItem label={"Deity"}>{diety}</DescriptionsItem>
        <DescriptionsItem label={"Size"}>{startCase(size)}</DescriptionsItem>
        <DescriptionsItem label={"Exp"}>{exp}</DescriptionsItem>
        <DescriptionsItem label={"Alignment"}>{alignment}</DescriptionsItem>
        <DescriptionsItem label={"Hero Points"}>{hero_points}</DescriptionsItem>
      </Descriptions>
    </div>
  );
}

export default CharacterInfo;
