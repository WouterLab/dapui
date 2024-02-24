import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { TEXT1_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${NEUTRAL[60]};
  color: ${NEUTRAL[0]};
  border-radius: 8px;
  ${TEXT1_STYLES};
  padding: 10px 20px;
`;

export const templateStyles = css``;
