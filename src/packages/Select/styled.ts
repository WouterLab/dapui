import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
import { styled } from "@linaria/react";
const { BLACK, GREY } = COLORS;

export const SelectWrapper = styled.div`
  ${TEXT1_STYLES};
  width: 100%;
  position: relative;
`;

export const selectStyles = css`
  transition: all 0.3s;
  color: ${GREY[0]};
  background-color: ${BLACK[0]};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:hover {
    background-color: ${BLACK[50]};
  }

  &:active {
    background-color: ${BLACK[80]};
  }
`;

export const SelectMenu = styled.ul`
  position: absolute;
  margin-top: 4px;
  width: 100%;
  display: grid;
  gap: 4px;
  animation: show 0.3s ease-in-out;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export const arrowStyles = css`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  transition: all 0.3s;

  path {
    fill: ${GREY[0]};
  }
`;

export const outlineStyles = css`
  background-color: ${GREY[0]};
  outline: 2px solid ${BLACK[0]};
  outline-offset: -2px;
  color: ${BLACK[50]};

  .${arrowStyles} {
    path {
      fill: ${BLACK[80]};
    }
  }

  &:hover {
    background-color: ${BLACK[0]};
    color: ${GREY[10]};

    .${arrowStyles} {
      path {
        fill: ${GREY[0]};
      }
    }
  }

  &:active {
    background-color: ${BLACK[80]};
    outline: ${BLACK[80]};
  }
`;

export const reverseStyles = css`
  transform: rotate(180deg);
`;

export const roundStyles = css`
  border-radius: 50px;
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
