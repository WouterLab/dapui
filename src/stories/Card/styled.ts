import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { NEUTRAL, SEA_GREEN } = COLORS;

export const customStyles = css`
  background-color: ${SEA_GREEN[40]};
  color: ${NEUTRAL[0]};
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${SEA_GREEN[60]};
    color: ${NEUTRAL[0]};
  }

  &:active {
    background-color: ${SEA_GREEN[90]};
    color: ${NEUTRAL[0]};
  }
`;
