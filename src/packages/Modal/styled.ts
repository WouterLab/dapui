import { styled } from "@linaria/react";
import { H4_BOLD_STYLES, TEXT1_STYLES, TEXT2_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: ${NEUTRAL[20]};
  ${TEXT1_STYLES};
  color: ${NEUTRAL[80]};
  width: 600px;
  height: 400px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 465) {
    width: 100%;
  }
`;

export const ModalBackdrop = styled.div`
  opacity: 0.3;
  background-color: ${NEUTRAL[80]};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  ${H4_BOLD_STYLES};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 10px;
  align-items: center;
`;

export const CloseWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${NEUTRAL[50]};
    }
  }

  svg {
    transition: all 0.3s;
    fill: ${NEUTRAL[60]};
  }
`;

export const Content = styled.div`
  ${TEXT2_STYLES};
  height: 100%;
`;
