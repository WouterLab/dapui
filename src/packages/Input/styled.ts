import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.input`
  transition:
    background-color 0.3s,
    opacity 0.3s,
    color 0.3s;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 18px;
  height: fit-content;
  color: ${BLACK[0]};
  background-color: ${GREY[0]};
  border-radius: 10px;
  outline: none;
  border: none;

  &:hover {
    background-color: ${GREY[50]};
  }

  &:focus {
    background-color: ${GREY[50]};
    outline: 2px solid ${BLACK[0]};
    outline-offset: -2px;
  }
`;

export const smallStyles = css`
  font-size: 14px;
  padding: 5px 10px;
`;

export const mediumStyles = css`
  font-size: 18px;
  padding: 10px 16px;
`;

export const bigStyles = css`
  font-size: 22px;
  padding: 14px 24px;
`;

export const outlineStyles = css`
  background-color: transparent;
  outline: 2px solid ${BLACK[0]};
  outline-offset: -2px;
  color: ${BLACK[50]};

  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
