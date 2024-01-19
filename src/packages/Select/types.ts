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
  Ghost = "ghost",
  Outline = "outline",
}

export interface SelectProps {
  /**
   * Select content
   */
  text: string;
  className?: string;
  /**
   * Select disabled or not option
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
