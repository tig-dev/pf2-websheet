import { message } from "antd";
import { cloneDeep, forEach, keys } from "lodash";

import { mainStateDefault } from "./defaults";
import { mainStateType } from "./types";

export const getAbilityMod = (mod: number): string => {
  const value = Math.floor(mod / 2) - 5;

  if (value >= 0) {
    return `+${value}`;
  } else {
    return `-${value}`;
  }
};

export const saveLocalChar = (state: mainStateType) => {
  localStorage[state.character.name] = JSON.stringify(cloneDeep(state));
  message.success("Saved character!");
};

export const saveSessionChar = (state: mainStateType) => {
  sessionStorage["lastChar"] = JSON.stringify(cloneDeep(state));
};

export const checkForSessionChar = (): boolean => {
  return keys(sessionStorage).includes("lastChar");
};

export const getSessionChar = (): mainStateType => {
  return JSON.parse(sessionStorage["lastChar"]);
};

export const checkForDefault = (): boolean => {
  let found = false;
  forEach(keys(localStorage), (char: string) => {
    const character = JSON.parse(localStorage[char]);
    if (character.default) {
      found = true;
      return false;
    }
  });
  return found;
};

export const checkIfDefault = (name: string): boolean => {
  const character = JSON.parse(localStorage[name]);
  if (character.default) {
    return true;
  }
  return false;
};

export const getDefaultChar = (): mainStateType => {
  let returnChar = mainStateDefault;
  forEach(keys(localStorage), (char: string) => {
    const character = JSON.parse(localStorage[char]);
    if (character.default) {
      returnChar = character;
    }
  });
  return returnChar;
};

export const setAndGetDefaultChar = (name: string): mainStateType => {
  let returnChar = mainStateDefault;
  forEach(keys(localStorage), (char: string) => {
    let character = JSON.parse(localStorage[char]);
    if (character.character.name === name) {
      character.default = true;
      returnChar = character;
    }
  });
  return returnChar;
};
