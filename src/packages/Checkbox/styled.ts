import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  border-radius: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${NEUTRAL[10]};
  transition: all 0.3s;

  &:hover {
    background-color: ${NEUTRAL[20]};
  }

  &:active {
    background-color: ${NEUTRAL[80]};
  }
`;

export const checkedStyles = css`
  background-color: ${NEUTRAL[80]};

  &:hover {
    background-color: ${NEUTRAL[80]};
  }

  &:active {
    background-color: ${NEUTRAL[90]};
  }
`;
