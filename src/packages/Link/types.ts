import { ReactNode } from "react";

/**
 * Interface defining the props for the Radio component.
 */
export interface LinkProps {
  children: ReactNode;
  noIcon?: boolean;
  href?: string;
  onClick?: () => void;
  /** Additional class name for styling the Link component. */
  className?: string;
}
