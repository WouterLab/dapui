import { styled } from "@linaria/react";
import { COLORS } from "../../packages/Colors";
import { TEXT1_STYLES } from "../../packages/Typography";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${TEXT1_STYLES};
  background-color: ${NEUTRAL[20]};
  color: ${NEUTRAL[90]};
`;
