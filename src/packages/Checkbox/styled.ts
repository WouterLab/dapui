import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import { COLORS } from "../Colors";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${GREY[10]};
  transition: all 0.3s;

  &:hover {
    background-color: ${GREY[20]};
  }

  &:active {
    background-color: ${GREY[50]};
  }
`;

export const checkedStyles = css`
  background-color: ${BLACK[50]};

  &:hover {
    background-color: ${BLACK[80]};
  }

  &:active {
    background-color: ${BLACK[100]};
  }
`;
