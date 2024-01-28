import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import { styled } from "@linaria/react";
const { NEUTRAL, RED } = COLORS;

export const customStyles = css`
  background-color: ${RED[40]};
  color: ${NEUTRAL[0]};

  &:hover {
    background-color: ${RED[60]};
    color: ${NEUTRAL[0]};
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 240px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 435px) {
    width: 100%;
  }
`;
