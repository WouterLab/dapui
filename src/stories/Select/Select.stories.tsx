import type { Meta, StoryFn } from "@storybook/react";
import { Select as SelectComponent } from "../../packages/Select";
import { SelectProps, SelectShape, SelectSize, SelectVariant } from "../../packages/Select/types";
import { customStyles, Wrapper } from "./styles";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Divider } from "../../packages/Divider";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "caramel", label: "Caramel" },
];

const meta = {
  title: "Base/Select",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [SelectSize.Small, SelectSize.Medium, SelectSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: SelectSize.Medium,
    },
    variant: {
      options: [SelectVariant.Filled, SelectVariant.Outline],
      control: {
        type: "inline-radio",
      },
      defaultValue: SelectVariant.Filled,
    },
    shape: {
      options: [SelectShape.Round, SelectShape.Square],
      control: {
        type: "inline-radio",
      },
      defaultValue: SelectShape.Square,
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof SelectComponent>;

function Template({ ...args }) {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <SelectComponent {...args} onChange={() => {}} />
      <Divider margin={10} />
      <div>You chose: {value}</div>
    </Wrapper>
  );
}

export default meta;

export const Filled: StoryFn<SelectProps> = Template.bind({});
Filled.args = {
  variant: SelectVariant.Filled,
  options,
  placeholder: "Filled",
};

export const Outline: StoryFn<SelectProps> = Template.bind({});
Outline.args = {
  variant: SelectVariant.Outline,
  options,
  placeholder: "Outline",
};

export const Custom: StoryFn<SelectProps> = Template.bind({});
Custom.args = {
  className: customStyles,
  options,
  placeholder: "Custom",
};
