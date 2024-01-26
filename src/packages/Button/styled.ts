import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  ${TEXT1_STYLES};
  height: fit-content;
  color: ${GREY[0]};
  background-color: ${BLACK[0]};
  border-radius: 10px;

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
  outline: 2px solid ${BLACK[0]};
  outline-offset: -2px;
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

export const ghostStyles = css`
  background-color: transparent;
  padding: 0 30px;
  color: ${BLACK[80]};

  &:hover {
    background-color: transparent;
    color: ${GREY[50]};
  }

  &:active {
    background-color: transparent;
    color: ${GREY[10]};
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
