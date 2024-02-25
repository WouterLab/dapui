import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { RED } = COLORS;

export const Wrapper = styled.div``;

export const customStyles = css`
  color: ${RED[40]};
  border-bottom: 1px solid ${RED[40]};
`;

export const arrowStyles = css`
  display: none;
`;
