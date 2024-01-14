import { SyntheticEvent } from "react";

export enum SwitchSize {
  Small = "small",
  Big = "big",
}

export interface SwitchProps {
  checked: boolean;
  onChange(checked: boolean, e?: SyntheticEvent<MouseEvent | KeyboardEvent> | MouseEvent): void;
  disabled?: boolean;
  size?: SwitchSize;
  onColor?: string;
  offColor?: string;
  onHandleColor?: string;
  offHandleColor?: string;
}
