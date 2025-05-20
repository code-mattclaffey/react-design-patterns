import React from 'react';
import type { Preview } from '@storybook/react';
import { Analytics } from '@vercel/analytics/react';
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
    storySort: [
      'Introduction',
      'Lessons',
      ['🥉 Bronze', '🥈 Silver', '🥇 Gold'],
      'Recipes'
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
        <Analytics />
      </div>
    )
  ]
};

export default preview;
