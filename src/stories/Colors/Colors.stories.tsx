import type { Meta, StoryFn } from "@storybook/react";
import styles from "./Colors.module.scss";
import { COLORS_DEFAULT, ColorMap } from "../../packages/Colors";

const meta: Meta = {
  title: "Theme/Colors",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

function Template() {
  return (
    <div className={styles.wrapper}>
      {Object.entries(COLORS_DEFAULT).map(([key, theme]) => (
        <div className={styles.block}>
          <div className={styles.theme}>{key}</div>
          {Object.entries(theme).map(([key, color]) => (
            <div className={styles.color}>
              <div className={styles.text}>
                <div>{key}</div>
                <div>{color}</div>
              </div>
              <div className={styles.view} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export const Colors: StoryFn<ColorMap> = Template.bind({});

export default meta;
