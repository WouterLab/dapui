import { InputHTMLAttributes } from "react";

export enum CheckboxVariant {
  Filled = "filled",
  Outline = "outline",
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
  variant: CheckboxVariant;
  className: string;
  markColor: string;
}
