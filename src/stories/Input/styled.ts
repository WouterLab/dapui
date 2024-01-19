import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, RED } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Kanit", sans-serif;
`;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};

  &:hover {
    background-color: ${RED[100]};
    color: ${GREY[0]};
  }
`;
