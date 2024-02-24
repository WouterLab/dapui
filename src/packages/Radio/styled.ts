import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { TEXT1_STYLES, TEXT2_STYLES, TEXT3_STYLES } from "../Typography";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Label = styled.span`
  color: ${NEUTRAL[80]};
  ${TEXT1_STYLES};
`;

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  width: 24px;
  height: 24px;
  border: 3px solid ${NEUTRAL[80]};
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s transform ease-in-out;
    box-shadow: inset 20px 20px ${NEUTRAL[70]};
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const smallRadioStyles = css`
  width: 18px;
  height: 18px;
  border: 2px solid ${NEUTRAL[80]};

  &::before {
    width: 10px;
    height: 10px;
  }
`;

export const mediumRadioStyles = css`
  width: 22px;
  height: 22px;

  &::before {
    width: 12px;
    height: 12px;
  }
`;

export const bigRadioStyles = css`
  width: 26px;
  height: 26px;

  &::before {
    width: 16px;
    height: 16px;
  }
`;

export const smallLabelStyles = css`
  ${TEXT3_STYLES};
`;

export const mediumLabelStyles = css`
  ${TEXT2_STYLES};
`;

export const bigLabelStyles = css`
  ${TEXT1_STYLES};
`;
