import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #454545;
  color: #fff;
`;

export const StepWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  cursor: pointer;
  padding: 10px 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const cssArrow = css`
  width: 24px;
  height: 24px;
  transition: all 0.3s;

  path {
    fill: #fff;
  }
`;

export const cssReverse = css`
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
`;

export const cssHidden = css`
  max-height: 0px;
  overflow: hidden;
  margin-top: 0;
  padding: 0 20px;
`;
