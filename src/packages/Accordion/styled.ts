import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { H3_STYLES, P1_STYLES } from "../Typography";

const { BLACK, GREY } = COLORS;

export const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${BLACK[0]};
  color: ${GREY[0]};
`;

export const StepWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  cursor: pointer;
  padding: 10px 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  ${H3_STYLES};
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
  ${P1_STYLES};
`;

export const hiddenStyles = css`
  max-height: 0px;
  overflow: hidden;
  margin-top: 0;
  padding: 0 20px;
`;
