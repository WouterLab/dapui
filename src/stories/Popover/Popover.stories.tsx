import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import {
  Placement,
  Popover as PopoverComponent,
  PopoverProps,
} from "../../packages/Popover";
import { Content, Wrapper, customStyles } from "./styled";

const meta = {
  title: "Composite/Popover",
  component: PopoverComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PopoverComponent>;

function Template({ ...args }: PopoverProps) {
  return (
    <Wrapper>
      <Content data-tooltip-id='my-tooltip'>
        Hover to see default Popover
      </Content>
      <PopoverComponent {...args}>
        <div>Any React Node content here...</div>
      </PopoverComponent>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<PopoverProps> = Template.bind({});
Default.args = {
  anchor: "my-tooltip",
};

export const Custom: StoryFn<PopoverProps> = Template.bind({});
Custom.args = {
  anchor: "my-tooltip",
  placement: Placement.BottomEnd,
  className: customStyles,
  noArrow: true,
  clickable: true,
};
