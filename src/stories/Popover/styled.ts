import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import { TEXT2_STYLES } from "../../packages/Typography";
const { NEUTRAL, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  ${TEXT2_STYLES};
  border: 1px solid ${NEUTRAL[80]};
  border-radius: 8px;
  padding: 5px 20px;
  width: fit-content;
  cursor: pointer;
`;

export const customStyles = css`
  background-color: ${RED[40]};
  color: ${NEUTRAL[0]};
`;
