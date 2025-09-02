import type { Meta, StoryObj } from '@storybook/react';

import { Final } from './final';

const meta: Meta<typeof Final> = {
  title:
    'Lessons/🥉 Bronze/🧼 State Colocation vs 🪜 State Lifting/03-Final',
  component: Final,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Final>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  play: async () => {},
  args: {}
};
