import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { Link as LinkComponent, LinkProps } from "../../packages/Link";
import { Wrapper, customStyles } from "./styled";

const meta = {
  title: "Base/Link",
  component: LinkComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkComponent>;

function Link({ ...args }: LinkProps) {
  return (
    <Wrapper>
      <LinkComponent {...args}>Link</LinkComponent>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<LinkProps> = Link.bind({});
Default.args = {
  onClick: fn(),
  href: "https://ponikit.vercel.app/",
};

export const Custom: StoryFn<LinkProps> = Link.bind({});
Custom.args = {
  className: customStyles,
  noIcon: true,
  onClick: fn(),
};
