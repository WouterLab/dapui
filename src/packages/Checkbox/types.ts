import { InputHTMLAttributes } from "react";

export enum CheckboxVariant {
  Filled = "filled",
  Outline = "outline",
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Specifies whether the checkbox is checked or not. */
  checked: boolean;

  /** Function to call when the checkbox state changes. */
  onChange: () => void;

  /** Specifies the variant of the checkbox. */
  variant: CheckboxVariant;

  /** Additional class name for styling the Checkbox component. */
  className: string;

  /** The color used to mark the checkbox when checked. */
  markColor: string;
}
