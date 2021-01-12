import { assignIn, cloneDeep } from "lodash";

import { mainStateDefault } from "../common/defaults";
import { mainStateType } from "../common/types";
import { saveSessionChar } from "../common/utils";

export type mainReducerActionType =
  | "NEW"
  | "LOAD"
  | "SAVE"
  | "CHARACTER"
  | "PORTRAIT"
  | "NOTES";

interface MainReducerProps {
  (
    state: mainStateType,
    action: { type: mainReducerActionType; payload: any }
  ): any;
}

export const MainReducer: MainReducerProps = (state, action) => {
  let newState = cloneDeep(state);

  switch (action.type) {
    case "NEW": {
      newState = cloneDeep(mainStateDefault);
      break;
    }

    case "LOAD": {
      newState = assignIn(newState, action.payload);
      break;
    }

    case "CHARACTER": {
      // action.payload: characterType object
      let newCharacter = cloneDeep(newState.character);
      newCharacter = assignIn(newCharacter, action.payload);
      newState = assignIn(newState, { character: newCharacter });
      break;
    }

    case "PORTRAIT": {
      // action.payload: base64 string for the image
      let newCharacter = cloneDeep(newState.character);
      newCharacter.info = assignIn(newCharacter.info, {
        portrait: action.payload,
      });
      newState = assignIn(newState, { character: newCharacter });
      break;
    }

    case "NOTES": {
      // action.payload: {
      //     general: boolean,
      //     value: {title: string, text: string} OR {title: string, text: string}[]
      // }
      if (action.payload.general) {
        let newNotes = cloneDeep(newState.notes);
        newNotes = assignIn(newNotes, {
          general: cloneDeep(action.payload.value),
        });
        newState = assignIn(newState, {
          notes: newNotes,
        });
      } else {
        let newNotes = cloneDeep(newState.notes);
        newNotes = assignIn(newNotes, {
          other: [...action.payload.value],
        });
        newState = assignIn(newState, {
          notes: newNotes,
        });
      }
      break;
    }

    case "SAVE": {
      break;
    }

    default: {
      newState = state;
      break;
    }
  }

  saveSessionChar(newState);
  return newState;
};
