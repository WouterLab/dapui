import type { Preview } from "@storybook/react";

import "../src/global.scss";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Theme", "Typography", "Base", "Composite"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
