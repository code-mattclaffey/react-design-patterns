import type { Preview } from '@storybook/react';
import { Code } from './components/CodeBlock';
import 'tailwindcss/tailwind.css';
import './styles/docs.styles.css';

const preview: Preview = {
  parameters: {
    docs: {
      components: {
        code: Code
      }
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

export default preview;
