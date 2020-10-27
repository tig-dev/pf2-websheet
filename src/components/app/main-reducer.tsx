import { cloneDeep } from "lodash";

import { mainStateDefault } from "../common/defaults";
import { mainStateType } from "../common/types";

export type mainReducerActionType = "NEW" | "LOAD" | "PORTRAIT" | "NOTES";

interface MainReducerProps {
  (
    state: mainStateType,
    action: { type: mainReducerActionType; payload: any }
  ): any;
}

export const MainReducer: MainReducerProps = (state, action) => {
  switch (action.type) {
    case "NEW": {
      return cloneDeep(mainStateDefault);
    }

    case "LOAD": {
      return cloneDeep(action.payload);
    }

    case "PORTRAIT": {
      // action.payload: base64 string for the image
      let newState = cloneDeep(state);
      return {
        ...newState,
        character: {
          ...newState.character,
          portrait: action.payload,
        },
      };
    }

    case "NOTES": {
      // action.payload: {
      //     general: boolean,
      //     value: {title: string, text: string} OR {title: string, text: string}[]
      // }
      let newState = cloneDeep(state);
      if (action.payload.general) {
        return {
          ...newState,
          notes: {
            ...newState.notes,
            general: cloneDeep(action.payload.value),
          },
        };
      } else {
        return {
          ...newState,
          notes: {
            ...newState.notes,
            other: [...action.payload.value],
          },
        };
      }
    }

    default: {
      return state;
    }
  }
};
