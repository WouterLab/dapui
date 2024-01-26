import { ReactNode } from "react";

/**
 * Interface defining the structure of an accordion step.
 */
export interface AccordionStep {
  /** The title of the accordion step. */
  title: string;

  /** The content to be displayed when the accordion step is expanded. */
  content: ReactNode;

  /** Optional class name for the arrow icon in the accordion step. */
  arrowClassName?: string;

  /** Callback function triggered when the accordion step is toggled. */
  onChange?: () => void;

  /** Flag indicating whether the accordion step should be open by default. */
  isOpenDefault?: boolean;
}

/**
 * Interface defining the props for the Accordion component.
 */
export interface AccordionProps {
  /** Array of accordion steps to be rendered. */
  steps: AccordionStep[];

  /** Array of indices representing the accordion steps that should be open by default. */
  defaultOpenedSteps?: number[];

  /** Additional class name for styling the Accordion component. */
  className?: string;

  /** Color of the divider line between accordion steps. */
  dividerColor?: string;

  /** Optional class name for the arrow icons across all accordion steps. */
  arrowClassName?: string;
}
