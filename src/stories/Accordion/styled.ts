import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;
`;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};
`;

export const arrowStyles = css`
  display: none;
`;

export const Content = styled.div`
  color: #e5e5e5;
`;
