import { mainStateType, dispatchActionType } from "./types";

export interface WithReducerProps {
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}

export interface EditStateWithReducerProps {
  setEditing(val: boolean): void;
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}
