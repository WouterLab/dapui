import { Dispatch, SetStateAction } from "react";

export enum RadioSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

/**
 * Interface defining the props for the Radio component.
 */
export interface RadioProps {
  label: string;
  checked: boolean;
  size?: RadioSize;
  setChecked: Dispatch<SetStateAction<string>>;
  value: string;
  /** Additional class name for styling the Radio component. */
  className?: string;
  labelClassName?: string;
}
