import { SyntheticEvent } from "react";

/**
 * Enum defining the possible sizes for the Switch component.
 */
export enum SwitchSize {
  Small = "small" /** The small size option */,
  Big = "big" /** The big size option */,
}

/**
 * Interface defining the props for the Switch component.
 */
export interface SwitchProps {
  /** The current checked state of the switch. */
  checked: boolean;

  /**
   * Callback function triggered when the switch state changes.
   * @param checked - The new checked state.
   * @param e - Optional event object associated with the change.
   */
  onChange(checked: boolean, e?: SyntheticEvent<MouseEvent | KeyboardEvent> | MouseEvent): void;

  /** Flag indicating whether the switch is disabled. */
  disabled?: boolean;

  /** The size (small or big) for the switch. */
  size?: SwitchSize;

  /** Color of the switch when in the "on" state. */
  onColor?: string;

  /** Color of the switch when in the "off" state. */
  offColor?: string;

  /** Color of the handle when in the "on" state. */
  onHandleColor?: string;

  /** Color of the handle when in the "off" state. */
  offHandleColor?: string;
}
