import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: #e5e5e5;
  transition: all 0.3s;

  &:hover {
    background-color: #d0d0d0;
  }

  &:active {
    background-color: #efefef;
  }
`;

export const cssChecked = css`
  background-color: #2b2b2b;

  &:hover {
    background-color: #3c3c3c;
  }

  &:active {
    background-color: #151515;
  }
`;
