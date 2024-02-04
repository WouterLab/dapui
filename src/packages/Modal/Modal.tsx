import { ModalProps } from "./types";
import { createPortal } from "react-dom";
import {
  HTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  CloseWrapper,
  Content,
  Header,
  ModalBackdrop,
  ModalWrapper,
  Title,
  Wrapper,
} from "./styled";

function CloseSvg({ ...args }: HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 50 50'
      {...args}
    >
      <path d='M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z' />
    </svg>
  );
}

export function Modal({
  isOpen,
  title,
  setIsOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  const ModalRef = useRef<HTMLDivElement>(null);
  const root = document.querySelector("body");

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose, setIsOpen]);

  const handleClick = (e: MouseEvent) => {
    const { target } = e;
    if (
      target instanceof Node &&
      !ModalRef.current?.contains(target) &&
      isOpen
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        console.log("press");
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handlePress);
    }

    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  if (root) {
    return createPortal(
      <Wrapper onClick={(e) => handleClick(e)}>
        <ModalWrapper ref={ModalRef} className={className}>
          <Header>
            <Title>{title}</Title>
            <CloseWrapper onClick={handleClose}>
              <CloseSvg />
            </CloseWrapper>
          </Header>
          <Content>{children}</Content>
        </ModalWrapper>
        <ModalBackdrop />
      </Wrapper>,
      root,
    );
  }
}
