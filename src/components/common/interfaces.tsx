import { mainStateType, dispatchActionType } from "./types";

export interface WithReducerProps {
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}
