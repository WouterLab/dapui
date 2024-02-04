import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Switch as SwitchComponent } from "../../packages/Switch";
import { SwitchProps, SwitchSize } from "../../packages/Switch/types";
import { useEffect, useState } from "react";

const meta = {
  title: "Base/Switch",
  component: SwitchComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [SwitchSize.Small, SwitchSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: SwitchSize.Big,
    },
  },
} satisfies Meta<typeof SwitchComponent>;

function Template({ checked, size, ...args }: SwitchProps) {
  const [checkedState, setChecked] = useState(checked);
  const [sizeKey, setSizeKey] = useState(0);

  useEffect(() => setSizeKey((x) => x + 1), [size]);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <SwitchComponent
      {...args}
      checked={checkedState}
      onChange={setChecked}
      size={size}
      key={sizeKey}
    />
  );
}

export default meta;

export const Default: StoryFn<SwitchProps> = Template.bind({});
Default.args = {
  checked: true,
};
