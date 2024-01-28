import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { NEUTRAL, RED } = COLORS;

export const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
`;

export const customStyles = css`
  background-color: ${RED[40]};
  color: ${NEUTRAL[0]};

  &:hover,
  &:focus {
    background-color: ${RED[60]};
    color: ${NEUTRAL[0]};
    outline: none;

    &::placeholder {
      color: ${NEUTRAL[0]};
    }
  }
`;
