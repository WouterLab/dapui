import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalProps {
  /** Determines whether the modal is open or closed. */
  isOpen: boolean;

  /** The title of the modal. */
  title: string;

  /** Optional function to be called when the modal is closed. */
  onClose?: () => void;

  /** The content to be displayed within the modal. */
  children: ReactNode;

  /** Additional custom classnames for the modal. */
  className?: string;

  /** Function to set the modal's open/closed state. */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
