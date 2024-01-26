import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
const { BLACK, GREY } = COLORS;

export const selectStyles = css`
  transition: all 0.3s;
  ${TEXT1_STYLES};
  height: fit-content;
  color: ${GREY[0]};
  background-color: ${BLACK[0]};
  border-radius: 10px;
  width: 100%;
  cursor: pointer !important;
  gap: 10px;

  &:hover {
    background-color: ${BLACK[50]};
  }

  &:active {
    background-color: ${BLACK[80]};
  }
`;

export const menuStyles = css`
  color: ${BLACK[0]};
  left: 0;
  margin-top: 4px;
`;

export const arrowStyles = css`
  transition: all 0.3s;
`;

export const arrowActiveStyles = css`
  transform: rotate(180deg);
  transition: all 0.3s;
`;

export const menuListStyles = css`
  display: grid;
  gap: 4px;
`;

export const optionStyles = css`
  transition: all 0.3s;
  ${TEXT1_STYLES};
  color: ${GREY[0]};
  background-color: ${BLACK[0]};
  border-radius: 10px;
  width: 100%;
  cursor: pointer !important;
  animation: show 0.3s ease-in-out;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background-color: ${BLACK[50]};
  }

  &:active {
    background-color: ${BLACK[80]};
  }
`;

export const smallStyles = css`
  ${TEXT3_STYLES};
  padding: 6px 30px;
`;

export const mediumStyles = css`
  ${TEXT2_STYLES};
  padding: 10px 30px;
`;

export const bigStyles = css`
  ${TEXT1_STYLES};
  padding: 14px 30px;
`;

export const outlineStyles = css`
  background-color: transparent;
  border: 2px solid ${BLACK[0]};
  color: ${BLACK[50]};

  &:hover {
    background-color: ${BLACK[0]};
    color: ${GREY[10]};
  }

  &:active {
    background-color: ${BLACK[80]};
    outline: ${BLACK[80]};
  }
`;

export const roundStyles = css`
  border-radius: 50px;
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
