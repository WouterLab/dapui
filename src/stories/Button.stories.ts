import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../packages/Button";
import { ButtonVariant } from "../packages/Button/types";

const meta = {
  title: "Base/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "big"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "medium",
    },
    shape: {
      options: ["round", "square"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "square",
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    text: "Button",
    variant: ButtonVariant.Filled,
  },
};

export const Outline: Story = {
  args: {
    text: "Button",
    variant: ButtonVariant.Outline,
  },
};

export const Ghost: Story = {
  args: {
    text: "Button",
    variant: ButtonVariant.Ghost,
  },
};
