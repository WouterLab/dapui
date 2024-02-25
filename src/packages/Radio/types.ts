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
  /** The label associated with the radio button. */
  label: string;

  /** Specifies whether the radio button is checked or not. */
  checked: boolean;

  /** Specifies the size of the radio button. */
  size?: RadioSize;

  /** Function to update the checked state of the radio button. */
  setChecked: Dispatch<SetStateAction<string>>;

  /** The value associated with the radio button. */
  value: string;

  /** Additional class name for styling the Radio component. */
  className?: string;

  /** Additional class name for styling the label of the Radio component. */
  labelClassName?: string;
}
