import { styled } from "@linaria/react";
import { COLORS } from "../../packages/Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
`;

export const Theme = styled.div`
  background-color: ${NEUTRAL[80]};
  color: ${NEUTRAL[0]};
  font-size: 36px;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Key = styled.div`
  font-weight: 700;
`;

export const Color = styled.div`
  padding: 10px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  color: ${NEUTRAL[0]};
`;

export const ColorsWrapper = styled.div`
  background-color: ${NEUTRAL[60]};
  padding: 10px 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

export const View = styled.div`
  border-radius: 8px;
  width: 50%;
  height: 40px;
  border: 2px solid ${NEUTRAL[0]};
`;
