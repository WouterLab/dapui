import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../packages/Card";
import { customStyles } from "./styled";

const meta = {
  title: "Composite/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: lorem,
    image:
      "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const Custom: Story = {
  args: {
    title: "Super long title which demonstrates the text clipping",
    subtitle: lorem + lorem,
    image:
      "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: customStyles,
  },
};
