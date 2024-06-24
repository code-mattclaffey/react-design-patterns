import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    storySort: ["Introduction", "Lessons", "Recipes"],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
