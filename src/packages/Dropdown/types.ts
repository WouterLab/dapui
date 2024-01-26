import { ReactNode } from "react";

/**
 * Interface defining the props for the Dropdown component.
 */
export interface DropdownProps {
  /** The title of the dropdown. */
  title: string;

  /** Optional subtitle for additional information. */
  subtitle?: string;

  /** The content (ReactNode) to be displayed when the dropdown is expanded. */
  children: ReactNode;

  /** Flag indicating whether the dropdown should be open by default. */
  isOpenDefault?: boolean;

  /** Additional class name for styling the Dropdown component. */
  className?: string;

  /** Optional class name for the arrow icon in the dropdown. */
  arrowClassName?: string;

  /** Callback function triggered when the dropdown is toggled. */
  onChange?: () => void;
}
