import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Select as SelectComponent } from "../../packages/Select";
import {
  OptionType,
  SelectProps,
  SelectShape,
  SelectSize,
  SelectVariant,
} from "../../packages/Select/types";
import { customStyles, Wrapper } from "./styles";
import { Divider } from "../../packages/Divider";
import { useState } from "react";

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
} satisfies Meta<typeof SelectComponent>;

function Template({ ...args }) {
  const [option, setOption] = useState<OptionType>({
    value: "",
    label: "Choose value...",
  });

  const handleChange = (selected: OptionType) => {
    setOption(selected);
  };

  return (
    <Wrapper>
      <SelectComponent
        selected={option}
        onChange={handleChange}
        options={options}
        {...args}
      />
      <Divider margin={10} />
      <div>You chose: {option.label}</div>
    </Wrapper>
  );
}

export default meta;

export const Filled: StoryFn<SelectProps> = Template.bind({});
Filled.args = {
  variant: SelectVariant.Filled,
  options,
};

export const Outline: StoryFn<SelectProps> = Template.bind({});
Outline.args = {
  variant: SelectVariant.Outline,
  options,
};

export const Custom: StoryFn<SelectProps> = Template.bind({});
Custom.args = {
  className: customStyles,
  options,
  isOpenDefault: true,
};
