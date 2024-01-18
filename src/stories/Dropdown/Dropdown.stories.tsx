import type { Meta, StoryFn } from "@storybook/react";
import { Dropdown as DropdownComponent, DropdownProps } from "../../packages/Dropdown";
import styles from "./Dropdown.module.css";

const meta = {
  title: "Composite/Dropdown",
  component: DropdownComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownComponent>;

function Template({ ...args }: DropdownProps) {
  return (
    <div className={styles.wrapper}>
      <DropdownComponent {...args}>
        <div className={styles.content}>
          <div className={styles.example}>Any React Node content here...</div>
          <div className={styles.example}>Any React Node content here...</div>
          <div className={styles.example}>Any React Node content here...</div>
          <div className={styles.example}>Any React Node content here...</div>
          <div className={styles.example}>Any React Node content here...</div>
        </div>
      </DropdownComponent>
    </div>
  );
}

export default meta;

export const Default: StoryFn<DropdownProps> = Template.bind({});
Default.args = {
  title: "Dropdown",
  subtitle: "Example subtitle",
};

export const Custom: StoryFn<DropdownProps> = Template.bind({});
Custom.args = {
  title: "Custom Dropdown",
  subtitle: "Example subtitle",
  className: styles.custom,
  arrowClassName: styles.arrow,
  isOpenDefault: true,
};
