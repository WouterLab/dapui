import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import {
  Checkbox as CheckboxComponent,
  CheckboxProps,
  CheckboxVariant,
} from "../../packages/Checkbox";
import { useState } from "react";
import { Wrapper, customStyles } from "./styled";
import { COLORS, Divider } from "../../packages";

const meta = {
  title: "Base/Checkbox",
  component: CheckboxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template({ ...args }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Wrapper>
      <CheckboxComponent {...args} onChange={handleChange} checked={checked} />
      <Divider margin={10} />
      <div>Checked: {checked ? "yes" : "no"}</div>
    </Wrapper>
  );
}

export default meta;

export const Filled: StoryFn<CheckboxProps> = Template.bind({});

export const Outline: StoryFn<CheckboxProps> = Template.bind({});
Outline.args = {
  variant: CheckboxVariant.Outline,
};

export const Custom: StoryFn<CheckboxProps> = Template.bind({});
Custom.args = {
  className: customStyles,
  markColor: COLORS.RED[10],
};
