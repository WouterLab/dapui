import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { NEUTRAL, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const customStyles = css`
  background-color: ${RED[40]};
  color: ${NEUTRAL[0]};
`;

export const arrowStyles = css`
  display: none;
`;
