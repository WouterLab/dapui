import type { Meta, StoryFn } from "@storybook/react";
import {
  Font,
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
import { Divider } from "../../packages/Divider";

const meta = {
  title: "Typography/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

const stylesData = [
  {
    title: "H1 Styles",
    className: h1Styles,
    font: H1_STYLES,
  },
  {
    title: "H1 Bold Styles",
    className: h1BoldStyles,
    font: H1_BOLD_STYLES,
  },
  {
    title: "H2 Styles",
    className: h2Styles,
    font: H2_STYLES,
  },
  {
    title: "H2 Bold Styles",
    className: h2BoldStyles,
    font: H2_BOLD_STYLES,
  },
  {
    title: "H3 Styles",
    className: h3Styles,
    font: H3_STYLES,
  },
  {
    title: "H3 Bold Styles",
    className: h3BoldStyles,
    font: H3_BOLD_STYLES,
  },
  {
    title: "H4 Styles",
    className: h4Styles,
    font: H4_STYLES,
  },
  {
    title: "H4 Bold Styles",
    className: h4BoldStyles,
    font: H4_BOLD_STYLES,
  },
  {
    title: "Text 1 Styles",
    className: p1Styles,
    font: TEXT1_STYLES,
  },
  {
    title: "Text 2 Styles",
    className: p2Styles,
    font: TEXT2_STYLES,
  },
  {
    title: "Text 3 Styles",
    className: p3Styles,
    font: TEXT3_STYLES,
  },
  {
    title: "Text 4 Styles",
    className: p4Styles,
    font: TEXT4_STYLES,
  },
];

function Template() {
  return (
    <Wrapper>
      {stylesData.map(({ title, className, font }) => {
        return (
          <Tag className={className} key={title}>
            <div>{title}:</div>
            <Divider margin={10} />
            {font
              .split(";")
              .slice(0, -1)
              .map((el, index) => (
                <Font key={index}>{el};</Font>
              ))}
          </Tag>
        );
      })}
    </Wrapper>
  );
}

export default meta;

export const Typography: StoryFn = Template.bind({});
