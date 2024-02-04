import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Modal as ModalComponent, ModalProps } from "../../packages/Modal";
import { useState } from "react";
import { Content, customStyles, Wrapper } from "./styled";
import { Button } from "../../packages/Button";

const meta = {
  title: "Composite/Modal",
  component: ModalComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModalComponent>;

function Template({ ...args }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <Wrapper>
      <Button text='Modal Trigger' onClick={() => setIsModalOpened(true)} />
      <ModalComponent
        isOpen={isModalOpened}
        setIsOpen={setIsModalOpened}
        title={args.title}
        {...args}
      >
        <Content>Modal content</Content>
      </ModalComponent>
    </Wrapper>
  );
}

export default meta;

export const Default: StoryFn<ModalProps> = Template.bind({});
Default.args = {
  title: "Your modal title",
};

export const Custom: StoryFn<ModalProps> = Template.bind({});
Custom.args = {
  title: "Your modal super long title which will be clipped",
  className: customStyles,
};
