import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { TEXT2_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.a`
  color: ${NEUTRAL[60]};
  ${TEXT2_STYLES};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-bottom: 1px solid ${NEUTRAL[60]};
  user-select: none;
  text-decoration: none;
`;

export const arrowStyles = css`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  transition: all 0.3s;
  margin-top: 2px;
  transform: rotate(90deg);

  path {
    fill: ${NEUTRAL[60]};
  }
`;
