import { cloneDeep } from "lodash";

import { mainStateDefault } from "../common/defaults";

interface MainReducerProps {
  (state: any, action: { type: string; payload: any }): any;
}

export const MainReducer: MainReducerProps = (state, action) => {
  switch (action.type) {
    case "NEW": {
      return cloneDeep(mainStateDefault);
    }

    case "LOAD": {
      return cloneDeep(action.payload);
    }

    case "NOTES": {
      // action.payload: {
      //     general: boolean,
      //     value: {title: string, text: string} OR {title: string, text: string}[]
      // }
      if (action.payload.general) {
        return {
          ...state,
          notes: {
            ...state.notes,
            general: cloneDeep(action.payload.value),
          },
        };
      } else {
        return {
          ...state,
          notes: {
            ...state.notes,
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
