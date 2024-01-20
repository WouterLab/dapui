import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../../packages/Colors";
import {
  H1_BOLD_STYLES,
  H1_STYLES,
  H2_BOLD_STYLES,
  H2_STYLES,
  H3_BOLD_STYLES,
  H3_STYLES,
  H4_BOLD_STYLES,
  H4_STYLES,
  TEXT1_STYLES,
  TEXT2_STYLES,
  TEXT3_STYLES,
  TEXT4_STYLES,
} from "../../packages/Typography";
const { GREY, BLACK } = COLORS;

export const Wrapper = styled.div`
  color: ${GREY[0]};
  display: grid;
  gap: 20px;
`;

export const Tag = styled.div`
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${BLACK[0]};
`;

export const h1Styles = css`
  ${H1_STYLES};
`;

export const h1BoldStyles = css`
  ${H1_BOLD_STYLES};
`;

export const h2Styles = css`
  ${H2_STYLES};
`;

export const h2BoldStyles = css`
  ${H2_BOLD_STYLES};
`;

export const h3Styles = css`
  ${H3_STYLES};
`;

export const h3BoldStyles = css`
  ${H3_BOLD_STYLES};
`;

export const h4Styles = css`
  ${H4_STYLES};
`;

export const h4BoldStyles = css`
  ${H4_BOLD_STYLES};
`;

export const p1Styles = css`
  ${TEXT1_STYLES};
`;

export const p2Styles = css`
  ${TEXT2_STYLES};
`;

export const p3Styles = css`
  ${TEXT3_STYLES};
`;

export const p4Styles = css`
  ${TEXT4_STYLES};
`;
