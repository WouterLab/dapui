import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT3_STYLES, TEXT4_STYLES } from "../Typography";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.input`
  transition:
    background-color 0.3s,
    opacity 0.3s,
    color 0.3s;
  ${TEXT3_STYLES};
  height: fit-content;
  color: ${GREY[0]};
  background-color: ${BLACK[0]};
  border-radius: 10px;
  outline: none;
  border: none;

  &:hover {
    background-color: ${BLACK[50]};
  }

  &:focus {
    background-color: ${GREY[20]};
    outline: 2px solid ${BLACK[0]};
    outline-offset: -2px;
    color: ${BLACK[50]};

    &::placeholder {
      color: ${BLACK[0]};
    }
  }

  &::placeholder {
    color: ${GREY[10]};
  }
`;

export const smallStyles = css`
  ${TEXT4_STYLES};
  padding: 6px 10px;
`;

export const mediumStyles = css`
  ${TEXT3_STYLES};
  padding: 10px 16px;
`;

export const bigStyles = css`
  ${TEXT1_STYLES};
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

  &:focus {
    background-color: ${BLACK[50]};
    outline: 2px solid ${BLACK[0]};
    outline-offset: -2px;
    color: ${GREY[0]};

    &::placeholder {
      color: ${GREY[10]};
    }
  }

  &::placeholder {
    color: ${BLACK[0]};
  }
`;

export const disabledStyles = css`
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
`;
