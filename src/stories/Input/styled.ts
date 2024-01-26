import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, RED } = COLORS;

export const Wrapper = styled.div`
  font-family: "Kanit", sans-serif;
`;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};

  &:hover,
  &:focus {
    background-color: ${RED[100]};
    color: ${GREY[0]};
    outline: none;

    &::placeholder {
      color: ${GREY[0]};
    }
  }
`;