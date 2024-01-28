import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { NEUTRAL, RED } = COLORS;

export const customStyles = css`
  background-color: ${RED[40]};
  color: ${NEUTRAL[0]};

  &:hover {
    background-color: ${RED[60]};
    color: ${NEUTRAL[0]};
  }

  &:active {
    background-color: ${RED[90]};
    color: ${NEUTRAL[0]};
  }
`;
