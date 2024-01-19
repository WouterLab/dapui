import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, RED } = COLORS;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};

  &:hover {
    background-color: ${RED[100]};
    color: ${GREY[0]};
  }
`;
