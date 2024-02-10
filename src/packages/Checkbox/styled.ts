import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  border-radius: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${NEUTRAL[20]};
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: ${NEUTRAL[30]};
  }

  &:active {
    background-color: ${NEUTRAL[40]};
  }
`;

export const checkStyles = css`
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const outlineStyles = css`
  background-color: transparent;
  outline: 2px solid ${NEUTRAL[80]};
  outline-offset: -2px;

  &:hover {
    background-color: transparent;
    outline: 2px solid ${NEUTRAL[60]};
  }

  &:active {
    background-color: transparent;
    outline: 2px solid ${NEUTRAL[40]};
  }
`;
