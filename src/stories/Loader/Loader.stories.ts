import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../../packages/Loader";
import { COLORS } from "../../packages/Colors";

const meta = {
  title: "Base/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    color: COLORS.RED[30],
  },
};
