import type { Meta, StoryFn } from "@storybook/react";
import { COLORS, ColorMap } from "../../packages/Colors";
import { Block, Color, Key, Text, Theme, View, Wrapper } from "./styled";

const meta: Meta = {
  title: "Theme/Colors",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

function Template() {
  return (
    <Wrapper>
      {Object.entries(COLORS).map(([key, theme]) => (
        <Block>
          <Theme>{key}</Theme>
          {Object.entries(theme).map(([key, color]) => (
            <Color>
              <Text>
                <Key>{key}</Key>
                <div>{color}</div>
              </Text>
              <View style={{ backgroundColor: color }} />
            </Color>
          ))}
        </Block>
      ))}
    </Wrapper>
  );
}

export const Colors: StoryFn<ColorMap> = Template.bind({});

export default meta;
