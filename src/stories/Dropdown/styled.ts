import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
const { GREY, BLACK, RED } = COLORS;

export const Wrapper = styled.div`
  width: 800px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Example = styled.div`
  background-color: ${GREY[10]};
  padding: 5px;
  border-radius: 10px;
  color: ${BLACK[100]};
`;

export const customStyles = css`
  background-color: ${RED[0]};
  color: ${GREY[0]};

  .${Example.__linaria.className} {
    background-color: ${GREY[0]};
  }
`;

export const arrowStyles = css`
  display: none;
`;
