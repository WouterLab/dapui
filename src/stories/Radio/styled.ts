import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import { TEXT1_STYLES } from "../../packages/Typography";
const { NEUTRAL, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${TEXT1_STYLES};

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const customStyles = css`
  background-color: ${RED[40]};
  border: 2px solid ${RED[90]};
  color: ${NEUTRAL[0]};

  &::before {
    box-shadow: inset 20px 20px ${NEUTRAL[10]};
  }
`;
