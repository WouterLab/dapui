import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-size: 18px;
  height: fit-content;
  color: #fff;
  background-color: #454545;
  border-radius: 10px;

  &:hover {
    background-color: #2e2e2e;
  }

  &:active {
    background-color: #1a1a1a;
  }
`;

export const cssSmall = css`
  font-size: 14px;
  padding: 5px 30px;
`;

export const cssMedium = css`
  font-size: 18px;
  padding: 7px 30px;
`;

export const cssBig = css`
  font-size: 22px;
  padding: 10px 30px;
`;

export const cssOutline = css`
  background-color: transparent;
  outline: 2px solid #454545;
  outline-offset: -2px;
  color: #2b2b2b;
  font-weight: 400;

  &:hover {
    background-color: #454545;
    color: #e5e5e5;
  }

  &:active {
    background-color: #1a1a1a;
    outline: #1a1a1a;
  }
`;

export const cssGhost = css`
  background-color: transparent;
  padding: 0 30px;
  color: #2b2b2b;
  font-weight: 400;

  &:hover {
    background-color: transparent;
    color: #b0b0b0;
  }

  &:active {
    background-color: transparent;
    color: #e5e5e5;
  }
`;

export const cssRound = css`
  border-radius: 50px;
`;

export const cssDisabled = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
