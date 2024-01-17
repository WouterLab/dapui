import { ChangeEvent, HTMLAttributes } from "react";

export enum InputSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

export enum InputVariant {
  Filled = "filled",
  Outline = "outline",
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Input value as a string
   */
  value: string;
  /**
   * Input placeholder if no value passed
   */
  placeholder?: string;
  /**
   * Input variant as filled or transparent with border
   */
  variant?: InputVariant;
  /**
   * Input size
   */
  size?: InputSize;
  /**
   * Input custom classnames
   */
  className?: string;
  /**
   * Input disabled or not option
   */
  disabled?: boolean;
  /**
   * Optional change handler
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
