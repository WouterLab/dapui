import type { Meta, StoryFn } from "@storybook/react";
import styles from "./Typography.module.scss";
import { TextTag } from "../../packages/Typography";
import * as Tags from "../../packages/Typography/Typography";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const meta = {
  title: "Typography/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

function Template() {
  return (
    <div className={styles.wrapper}>
      {Object.entries(Tags).map((tag) => {
        return (
          <div className={styles.tag} key={tag[0]}>
            {tag[1]({ children: tag[0] + `, ${lorem}` })}
          </div>
        );
      })}
    </div>
  );
}

export default meta;

export const Typography: StoryFn<TextTag> = Template.bind({});
