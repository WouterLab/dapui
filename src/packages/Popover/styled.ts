import { css } from "@linaria/core";
import { TEXT3_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const popoverStyles = css`
  ${TEXT3_STYLES};
  color: ${NEUTRAL[80]};
  background-color: ${NEUTRAL[30]};
  padding: 14px 30px;
  border-radius: 8px;
`;
