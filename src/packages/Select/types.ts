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

export type OptionType = {
  label: string;
  value: string;
};

export interface SelectProps {
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
  selected: OptionType;
  onChange: (selected: OptionType) => void;
  options: OptionType[];
  placeholder?: string;
  isOpenDefault?: boolean;
}
