import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Template as TemplateComponent, TemplateProps } from "../../packages/Template";
import { Wrapper, customStyles } from "./styled";

const meta = {
  title: "Base/Template",
  component: TemplateComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TemplateComponent>;

function Template({ ...args }: TemplateProps) {
  return (
    <Wrapper>
      <TemplateComponent {...args} />
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<TemplateProps> = Template.bind({});
Default.args = {};

export const Custom: StoryFn<TemplateProps> = Template.bind({});
Custom.args = {
  className: customStyles,
};
