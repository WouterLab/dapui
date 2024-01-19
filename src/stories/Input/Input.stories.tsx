import type { Meta, StoryFn } from "@storybook/react";
import { InputProps, InputSize, InputVariant } from "../../packages/Input";
import { Input as InputComponent } from "../../packages/Input";
import { ChangeEvent, useState } from "react";
import { Wrapper, customStyles } from "./styled";

const meta = {
  title: "Base/Input",
  component: InputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: [InputSize.Small, InputSize.Medium, InputSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: InputSize.Medium,
    },
    variant: {
      options: [InputVariant.Filled, InputVariant.Outline],
      control: {
        type: "inline-radio",
      },
      defaultValue: InputVariant.Filled,
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template({ ...args }) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <InputComponent value={value} onChange={handleChange} {...args} />
      <div>You entered: {value}</div>
    </Wrapper>
  );
}

export default meta;

export const Filled: StoryFn<InputProps> = Template.bind({});
Filled.args = {
  variant: InputVariant.Filled,
  placeholder: "Filled",
};

export const Outline: StoryFn<InputProps> = Template.bind({});
Outline.args = {
  variant: InputVariant.Outline,
  placeholder: "Outline",
};

export const Custom: StoryFn<InputProps> = Template.bind({});
Custom.args = {
  className: customStyles,
  placeholder: "Custom",
};
