import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  TextAreaProps,
  TextAreaSize,
  TextAreaVariant,
} from "../../packages/TextArea";
import { TextArea as TextAreaComponent } from "../../packages/TextArea";
import { ChangeEvent, useState } from "react";
import { Wrapper, customStyles } from "./styled";
import { Divider } from "../../packages/Divider";

const meta = {
  title: "Base/TextArea",
  component: TextAreaComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: [TextAreaSize.Small, TextAreaSize.Medium, TextAreaSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: TextAreaSize.Medium,
    },
    variant: {
      options: [TextAreaVariant.Filled, TextAreaVariant.Outline],
      control: {
        type: "inline-radio",
      },
      defaultValue: TextAreaVariant.Filled,
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

function Template({ value, ...args }: TextAreaProps) {
  const [textAreaValue, setTextAreaValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <Wrapper>
      <TextAreaComponent
        onChange={handleChange}
        value={textAreaValue}
        {...args}
      />
      <Divider margin={10} />
      <div>You entered: {textAreaValue}</div>
    </Wrapper>
  );
}

export default meta;

export const Filled: StoryFn<TextAreaProps> = Template.bind({});
Filled.args = {
  variant: TextAreaVariant.Filled,
  placeholder: "Filled",
  value: "",
  onEnter: fn(),
};

export const Outline: StoryFn<TextAreaProps> = Template.bind({});
Outline.args = {
  variant: TextAreaVariant.Outline,
  placeholder: "Outline",
  value: "",
  onEnter: fn(),
};

export const Custom: StoryFn<TextAreaProps> = Template.bind({});
Custom.args = {
  className: customStyles,
  placeholder: "Custom",
  value: "",
  onEnter: fn(),
};
