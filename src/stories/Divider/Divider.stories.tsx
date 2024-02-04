import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { DividerProps } from "../../packages/Divider";
import { Divider as DividerComponent } from "../../packages/Divider";
import { Wrapper } from "./styled";

const meta = {
  title: "Base/Divider",
  component: DividerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template({ ...args }) {
  return (
    <Wrapper>
      <div>some content</div>
      <DividerComponent {...args} />
      <div>to divide from each other</div>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<DividerProps> = Template.bind({});

export const Custom: StoryFn<DividerProps> = Template.bind({});
Custom.args = {
  color: "burlywood",
  margin: 4,
};
