import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { H3_BOLD_STYLES, TEXT1_STYLES, TEXT2_STYLES } from "../Typography";
import { COLORS } from "../Colors";
const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  transition: all 0.3s;
  ${TEXT1_STYLES};
  height: fit-content;
  background-color: ${NEUTRAL[20]};
  color: ${NEUTRAL[90]};
  border-radius: 8px;
  overflow: hidden;
  width: 320px;

  @media (max-width: 435px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
`;

export const Text = styled.div`
  padding: 16px 24px 20px 24px;
  display: grid;
  gap: 8px;
`;

export const Title = styled.div`
  ${H3_BOLD_STYLES};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Subtitle = styled.div`
  ${TEXT2_STYLES};
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const hiddenStyles = css`
  display: none;
`;
