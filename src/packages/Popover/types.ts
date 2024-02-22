import { ReactNode } from "react";

export enum Placement {
  Top = "top",
  TopStart = "top-start",
  TopEnd = "top-end",
  Right = "right",
  RightStart = "right-start",
  RightEnd = "right-end",
  Bottom = "bottom",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  Left = "left",
  LeftStart = "left-start",
  LeftEnd = "left-end",
}

/**
 * Interface defining the props for the Dropdown component.
 */
export interface PopoverProps {
  /** Data Tooltip Id of the element which you want to have Popover. */
  anchor: string;

  /** The content (ReactNode) to be displayed when the popover is opened. */
  children: ReactNode;

  /** Additional class name for styling the Popover component. */
  className?: string;

  /** Popover placement related to anchor element. */
  placement?: Placement;

  /** Property which makes your Popover not hiding on hover. */
  clickable?: boolean;

  /** Property to hide the arrow of Popover. */
  noArrow?: boolean;
}
