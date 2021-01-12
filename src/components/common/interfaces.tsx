import { FormInstance } from "antd/lib/form";
import { mainStateType, dispatchActionType } from "./types";

export interface WithReducerProps {
  state: mainStateType;
  dispatch(action: dispatchActionType): void;
}

export interface EditStateWithReducerProps extends WithReducerProps {
  setEditing(val: boolean): void;
}

export interface CharacterFormTabProps extends WithReducerProps {
  form: FormInstance<any>;
}