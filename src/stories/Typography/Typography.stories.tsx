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

const meta = {
  title: "Typography/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

function Template() {
  return (
    <Wrapper>
      <Tag className={h1Styles}>{lorem}</Tag>
      <Tag className={h1BoldStyles}>{lorem}</Tag>
      <Tag className={h2Styles}>{lorem}</Tag>
      <Tag className={h2BoldStyles}>{lorem}</Tag>
      <Tag className={h3Styles}>{lorem}</Tag>
      <Tag className={h3BoldStyles}>{lorem}</Tag>
      <Tag className={h4Styles}>{lorem}</Tag>
      <Tag className={h4BoldStyles}>{lorem}</Tag>
      <Tag className={p1Styles}>{lorem}</Tag>
      <Tag className={p2Styles}>{lorem}</Tag>
      <Tag className={p3Styles}>{lorem}</Tag>
      <Tag className={p4Styles}>{lorem}</Tag>
    </Wrapper>
  );
}

export default meta;

export const Typography: StoryFn<TextTag> = Template.bind({});
