import type { Meta, StoryFn } from "@storybook/react";
import { TextTag } from "../../packages/Typography";
import {
  Tag,
  Wrapper,
  h1BoldStyles,
  h1Styles,
  h2BoldStyles,
  h2Styles,
  h3BoldStyles,
  h3Styles,
  h4BoldStyles,
  h4Styles,
  p1Styles,
  p2Styles,
  p3Styles,
  p4Styles,
} from "./styled";

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

const meta = {
  title: "Typography/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template() {
  return (
    <Wrapper>
      <Tag className={h1Styles}>
        <div className={h1Styles}>H1 Styles:</div> {H1_STYLES}
      </Tag>
      <Tag className={h1BoldStyles}>
        <div className={h1BoldStyles}>H1 Bold Styles:</div> {H1_BOLD_STYLES}
      </Tag>
      <Tag className={h2Styles}>
        <div className={h2Styles}>H2 Styles:</div> {H2_STYLES}
      </Tag>
      <Tag className={h2BoldStyles}>
        <div className={h2BoldStyles}>H2 Bold Styles:</div> {H2_BOLD_STYLES}
      </Tag>
      <Tag className={h3Styles}>
        <div className={h3Styles}>H3 Styles:</div> {H3_STYLES}
      </Tag>
      <Tag className={h3BoldStyles}>
        <div className={h3BoldStyles}>H3 Bold Styles:</div> {H3_BOLD_STYLES}
      </Tag>
      <Tag className={h4Styles}>
        <div className={h4Styles}>H4 Styles:</div> {H4_STYLES}
      </Tag>
      <Tag className={h4BoldStyles}>
        <div className={h4BoldStyles}>H4 Bold Styles:</div> {H4_BOLD_STYLES}
      </Tag>
      <Tag className={p1Styles}>
        <div className={p1Styles}>Text 1 Styles:</div> {TEXT1_STYLES}
      </Tag>
      <Tag className={p2Styles}>
        <div className={p2Styles}>Text 2 Styles:</div> {TEXT2_STYLES}
      </Tag>
      <Tag className={p3Styles}>
        <div className={p3Styles}>Text 3 Styles:</div> {TEXT3_STYLES}
      </Tag>
      <Tag className={p4Styles}>
        <div className={p4Styles}>Text 4 Styles:</div> {TEXT4_STYLES}
      </Tag>
    </Wrapper>
  );
}

export default meta;

export const Typography: StoryFn<TextTag> = Template.bind({});
