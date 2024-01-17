import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../packages/Button";
import styles from "./Button.module.scss";
import { ButtonShape, ButtonSize, ButtonVariant } from "../../packages/Button/types";

const meta = {
  title: "Base/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Big],
      control: {
        type: "inline-radio",
      },
      defaultValue: ButtonSize.Medium,
    },
    variant: {
      options: [ButtonVariant.Filled, ButtonVariant.Outline, ButtonVariant.Ghost],
      control: {
        type: "inline-radio",
      },
      defaultValue: ButtonVariant.Filled,
    },
    shape: {
      options: [ButtonShape.Round, ButtonShape.Square],
      control: {
        type: "inline-radio",
      },
      defaultValue: ButtonShape.Square,
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
    text: "Click!",
    variant: ButtonVariant.Filled,
  },
};

export const Outline: Story = {
  args: {
    text: "Click!",
    variant: ButtonVariant.Outline,
  },
};

export const Ghost: Story = {
  args: {
    text: "Click!",
    variant: ButtonVariant.Ghost,
  },
};

export const Custom: Story = {
  args: {
    text: "Click!",
    variant: ButtonVariant.Filled,
    className: styles.test,
  },
};
