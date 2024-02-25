import { ReactNode } from "react";

/**
 * Interface defining the props for the Radio component.
 */
export interface LinkProps {
  /** The content to display within the link. */
  children: ReactNode;

  /** Indicates whether to display an icon with the link. */
  noIcon?: boolean;

  /** The URL to navigate to when the link is clicked. */
  href?: string;

  /** Function to call when the link is clicked. */
  onClick?: () => void;

  /** Additional class name for styling the Link component. */
  className?: string;
}
