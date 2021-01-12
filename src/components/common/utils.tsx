import { message } from "antd";
import { cloneDeep, forEach, keys, isNil } from "lodash";

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
  localStorage[state.character.info.name] = JSON.stringify(cloneDeep(state));
  message.success("Saved character!");
};

export const saveSessionChar = (state: mainStateType) => {
  sessionStorage["lastChar"] = JSON.stringify(cloneDeep(state));
};

export const checkForSessionChar = (): boolean => {
  if(keys(sessionStorage).includes("lastChar")) {
    const lastChar = JSON.parse(sessionStorage["lastChar"]);
    if(lastChar.character.info.name) {
      return true;
    }
  }

  return false;
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
  return !!character.default;
};

export const setDefaultChar = (state: mainStateType): mainStateType => {
  const newState = cloneDeep(state);
  newState.default = true;
  saveLocalChar(newState);
  return newState
}

export const getDefaultChar = (): mainStateType => {
  let returnChar: mainStateType | null = null;
  forEach(keys(localStorage), (char: string) => {
    let state = JSON.parse(localStorage[char]);
    if (state.default) {
      returnChar = cloneDeep(state);
    }
  });

  return !isNil(returnChar) ? returnChar : mainStateDefault;
};

export const setAndGetDefaultChar = (name: string): mainStateType => {
  return setDefaultChar(JSON.parse(localStorage[name]));
};
