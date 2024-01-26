import { ComponentProps } from "react";
import ReactSelect from "react-select";

type ReactSelectProps = ComponentProps<typeof ReactSelect>;

export enum SelectShape {
  Round = "round",
  Square = "square",
}

export enum SelectSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

export enum SelectVariant {
  Filled = "filled",
  Outline = "outline",
}

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends ReactSelectProps {
  className?: string;
  /**
   * Select disabled or not option
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  variant?: SelectVariant;
  size?: SelectSize;
  shape?: SelectShape;
  onChange: () => void;
}
