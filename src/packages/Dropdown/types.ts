import { ReactNode } from "react";

export interface DropdownProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isOpenDefault?: boolean;
  className?: string;
  arrowClassName?: string;
  onChange?: () => void;
}
