import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { H2_BOLD_STYLES, H3_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { BLACK, GREY } = COLORS;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${BLACK[0]};
  color: ${GREY[0]};
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
`;

export const Header = styled.div`
  cursor: pointer;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  ${H2_BOLD_STYLES};
`;

export const arrowStyles = css`
  width: 24px;
  height: 24px;
  transition: all 0.3s;

  path {
    fill: ${GREY[0]};
  }
`;

export const reverseStyles = css`
  transform: rotate(180deg);
`;

export const Subtitle = styled.div`
  margin-top: 10px;
  ${H3_STYLES};
`;

export const Content = styled.div`
  transition:
    max-height 0.3s,
    margin-top 0.3s,
    padding-top 0.3s,
    padding-bottom 0.3s;
  opacity: 1;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const hiddenStyles = css`
  max-height: 0px;
  overflow: hidden;
  margin-top: 0;
  padding: 0 20px;
`;
