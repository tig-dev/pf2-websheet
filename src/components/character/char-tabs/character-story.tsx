import React from "react";
import { Descriptions } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

import { WithReducerProps } from "../../common/interfaces";

export interface CharacterStoryProps extends WithReducerProps {}

const CharacterStory = ({ state, dispatch }: CharacterStoryProps) => {
  const name = state.character.info.name;
  const story = state.character.story;

  return (
    <Descriptions
      className={"details-bottom"}
      column={1}
      size={"small"}
      bordered={true}
      layout={"vertical"}
    >
      <DescriptionsItem label={"Background, history, details, etc."}>
        {story
          ? story
          : `Tell us a bit about ${name ? name : "your character"}?`}
      </DescriptionsItem>
    </Descriptions>
  );
}

export default CharacterStory;
