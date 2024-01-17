import type { Meta, StoryFn } from "@storybook/react";
import { DividerProps } from "../../packages/Divider";
import styles from "./Divider.module.scss";
import { Divider as DividerComponent } from "../../packages/Divider";

const meta = {
  title: "Base/Divider",
  component: DividerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template({ ...args }) {
  return (
    <div className={styles.wrapper}>
      <div>some content</div>
      <DividerComponent {...args} />
      <div>to divide from each other</div>
    </div>
  );
}

export default meta;

export const Default: StoryFn<DividerProps> = Template.bind({});

export const Custom: StoryFn<DividerProps> = Template.bind({});
Custom.args = {
  color: "burlywood",
  margin: 4,
};
