import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import { styled } from "@linaria/react";
const { GREY, RED } = COLORS;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};

  &:hover {
    background-color: ${RED[100]};
    color: ${GREY[0]};
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 240px;
  font-family: "Kanit", sans-serif;

  @media (max-width: 435px) {
    width: 100%;
  }
`;
