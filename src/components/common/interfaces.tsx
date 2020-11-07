import { mainStateType, dispatchActionType } from "./types";

export interface WithReducerProps {
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}

export interface EditStateWithReducerProps {
  editing: boolean;
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}
