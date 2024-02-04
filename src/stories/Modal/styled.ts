import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import { styled } from "@linaria/react";
import { TEXT1_STYLES } from "../../packages/Typography";
const { NEUTRAL, SEA_GREEN } = COLORS;

export const customStyles = css`
  background-color: ${SEA_GREEN[40]};
  color: ${NEUTRAL[0]};
  border-radius: 30px;

  &:hover {
    background-color: ${SEA_GREEN[60]};
    color: ${NEUTRAL[0]};
  }

  &:active {
    background-color: ${SEA_GREEN[90]};
    color: ${NEUTRAL[0]};
  }
`;

export const Wrapper = styled.div`
  ${TEXT1_STYLES};
`;

export const Content = styled.div`
  display: grid;
  gap: 20px;
  background-color: ${NEUTRAL[30]};
  padding: 20px;
  height: 100%;
  border-radius: 8px;
`;
