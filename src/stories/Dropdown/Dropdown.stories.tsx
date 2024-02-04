import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import {
  Dropdown as DropdownComponent,
  DropdownProps,
} from "../../packages/Dropdown";
import { Content, Example, Wrapper, arrowStyles, customStyles } from "./styled";

const meta = {
  title: "Composite/Dropdown",
  component: DropdownComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownComponent>;

function Template({ ...args }: DropdownProps) {
  return (
    <Wrapper>
      <DropdownComponent {...args}>
        <Content>
          <Example>Any React Node content here...</Example>
          <Example>Any React Node content here...</Example>
          <Example>Any React Node content here...</Example>
          <Example>Any React Node content here...</Example>
          <Example>Any React Node content here...</Example>
        </Content>
      </DropdownComponent>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<DropdownProps> = Template.bind({});
Default.args = {
  title: "Dropdown",
  subtitle: "Example subtitle",
};

export const Custom: StoryFn<DropdownProps> = Template.bind({});
Custom.args = {
  title: "Custom Dropdown",
  subtitle: "Example subtitle",
  className: customStyles,
  arrowClassName: arrowStyles,
  isOpenDefault: true,
};
