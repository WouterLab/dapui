import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Radio as RadioComponent, RadioProps, RadioSize } from "../../packages/Radio";
import { Wrapper, customStyles } from "./styled";

const meta = {
  title: "Base/Radio",
  component: RadioComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [RadioSize.Small, RadioSize.Medium, RadioSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: RadioSize.Medium,
    },
  },
} satisfies Meta<typeof RadioComponent>;

function Radio({ size, className }: RadioProps) {
  const [chosenValue, setChosenValue] = useState("");

  return (
    <Wrapper>
      <RadioComponent
        setChecked={setChosenValue}
        checked={chosenValue === "one"}
        label='Variant One'
        value='one'
        className={className}
        size={size}
      />
      <RadioComponent
        setChecked={setChosenValue}
        checked={chosenValue === "two"}
        label='Variant Two'
        value='two'
        className={className}
        size={size}
      />
      <span>Checked: {chosenValue}</span>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<RadioProps> = Radio.bind({});

export const Custom: StoryFn<RadioProps> = Radio.bind({});
Custom.args = {
  className: customStyles,
};
