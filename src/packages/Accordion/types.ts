import { ReactNode } from "react";

export interface AccordionStep {
  title: string;
  content: ReactNode;
  arrowClassName?: string;
  onChange?: () => void;
  isOpenDefault?: boolean;
}

export interface AccordionProps {
  steps: AccordionStep[];
  defaultOpenedSteps?: number[];
  className?: string;
  dividerColor?: string;
  arrowClassName?: string;
}
