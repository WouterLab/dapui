import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};
  border-radius: 30px;
`;

export const arrowStyles = css`
  display: none;
`;

export const Content = styled.div`
  color: ${GREY[10]};
`;
