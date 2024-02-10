import { ChangeEvent, HTMLAttributes } from "react";

/**
 * Enum defining the possible sizes for the TextArea component.
 */
export enum TextAreaSize {
  Small = "small" /** The small size option */,
  Medium = "medium" /** The medium size option */,
  Big = "big" /** The big size option */,
}

/**
 * Enum defining the possible variants for the TextArea component.
 */
export enum TextAreaVariant {
  Filled = "filled" /** The filled variant option */,
  Outline = "outline" /** The outline variant option */,
}

/**
 * Interface defining the props for the TextArea component.
 */
export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  /** The current value of the Textarea. */
  value: string;

  /** Placeholder text to display when the Textarea is empty. */
  placeholder?: string;

  /** The variant (filled or outline) for the Textarea. */
  variant?: TextAreaVariant;

  /** The size (small, medium, or big) for the Textarea. */
  size?: TextAreaSize;

  /** Additional class name for styling the Textarea component. */
  className?: string;

  /** Flag indicating whether the Textarea is disabled. */
  disabled?: boolean;

  /** Callback function triggered when the Textarea value changes. */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  /** Callback function triggered when Enter key pressed while textarea active */
  onEnter?: () => void;
}
