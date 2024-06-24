import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark
    },
    storySort: ['Introduction', 'Lessons', 'Recipes'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

export default preview;
