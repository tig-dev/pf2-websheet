import React from "react";
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
    diety,
    age,
    gender,
    pronouns,
    height,
    weight,
    personality,
  } = state.character.info;

  return (
    <div className={"char-tab-content"}>
      <div className={"char-tab-top"}>
        <CharacterPortrait state={state} dispatch={dispatch} />
        <Descriptions bordered={true} column={3} layout={"vertical"}>
          <DescriptionsItem label={"Ancestry"}>{ancestry}</DescriptionsItem>
          <DescriptionsItem label={"Class"}>{charClass}</DescriptionsItem>
          <DescriptionsItem label={"Gender"}>{gender}</DescriptionsItem>
          <DescriptionsItem label={"Heritage"}>{heritage}</DescriptionsItem>
          <DescriptionsItem label={"Background"}>{background}</DescriptionsItem>
          <DescriptionsItem label={"Pronouns"}>{pronouns}</DescriptionsItem>
        </Descriptions>
      </div>
      <div className={"char-tab-bottom"}>
        <Descriptions bordered={true} column={4} layout={"vertical"}>
          <DescriptionsItem label={"Diety"}>{diety}</DescriptionsItem>
          <DescriptionsItem label={"Age"}>{age}</DescriptionsItem>
          <DescriptionsItem label={"Height"}>{height}</DescriptionsItem>
          <DescriptionsItem label={"Weight"}>{weight}</DescriptionsItem>
          <DescriptionsItem
            label={"Personality"}
            span={4}
            className={"desc-item-with-desc"}
          >
            <Descriptions
              bordered={true}
              column={window.innerHeight > 800 ? 1 : 2}
              size={"small"}
            >
              <DescriptionsItem label={"Attitude"}>
                {personality.attitude}
              </DescriptionsItem>
              <DescriptionsItem label={"Beliefs"}>
                {personality.beliefs}
              </DescriptionsItem>
              <DescriptionsItem label={"Likes"}>
                {personality.likes}
              </DescriptionsItem>
              <DescriptionsItem label={"Dislikes"}>
                {personality.dislikes}
              </DescriptionsItem>
            </Descriptions>
          </DescriptionsItem>
        </Descriptions>
      </div>
    </div>
  );
}

export default CharacterInfo;
