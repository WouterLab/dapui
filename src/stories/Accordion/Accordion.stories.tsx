import type { Meta, StoryFn } from "@storybook/react";
import {
  Accordion as AccordionComponent,
  AccordionProps,
  AccordionStep,
} from "../../packages/Accordion";
import styles from "./Accordion.module.css";

const meta = {
  title: "Composite/Accordion",
  component: AccordionComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionComponent>;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const stepsExample: AccordionStep[] = [
  {
    title: "This is an example first step of Accordion",
    content: <div className={styles.content}>{lorem}</div>,
  },
  {
    title: "This is an example second step of Accordion",
    content: <div className={styles.content}>{lorem}</div>,
  },
  {
    title: "This is an example third step of Accordion",
    content: <div className={styles.content}>{lorem}</div>,
  },
  {
    title: "This is an example fourth step of Accordion",
    content: <div className={styles.content}>{lorem}</div>,
  },
];

function Template({ ...args }: AccordionProps) {
  return (
    <div className={styles.wrapper}>
      <AccordionComponent {...args} />
    </div>
  );
}

export default meta;

export const Default: StoryFn<AccordionProps> = Template.bind({});
Default.args = {
  steps: stepsExample,
};

export const Custom: StoryFn<AccordionProps> = Template.bind({});
Custom.args = {
  steps: stepsExample,
  className: styles.custom,
  arrowClassName: styles.arrow,
  dividerColor: "#fff",
  defaultOpenedSteps: [0, 2],
};
