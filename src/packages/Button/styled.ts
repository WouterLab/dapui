import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { P1_STYLES } from "../Typography";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  ${P1_STYLES};
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
  font-size: 14px;
  padding: 5px 30px;
`;

export const mediumStyles = css`
  font-size: 18px;
  padding: 7px 30px;
`;

export const bigStyles = css`
  font-size: 22px;
  padding: 10px 30px;
`;

export const outlineStyles = css`
  background-color: transparent;
  outline: 2px solid ${BLACK[0]};
  outline-offset: -2px;
  color: ${BLACK[50]};
  font-weight: 400;

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
  font-weight: 400;

  &:hover {
    background-color: transparent;
    color: ${GREY[60]};
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
