import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { COLORS, ColorMap } from "../../packages/Colors";
import {
  Color,
  ColorsWrapper,
  Key,
  Text,
  Theme,
  View,
  Wrapper,
} from "./styled";

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
        <div key={key}>
          <Theme>{key}</Theme>
          <ColorsWrapper>
            {Object.entries(theme).map(([key, color]) => (
              <Color key={key}>
                <Text>
                  <Key>{key}</Key>
                  <div>{color}</div>
                </Text>
                <View style={{ backgroundColor: color }} />
              </Color>
            ))}
          </ColorsWrapper>
        </div>
      ))}
    </Wrapper>
  );
}

export const Colors: StoryFn<ColorMap> = Template.bind({});

export default meta;
