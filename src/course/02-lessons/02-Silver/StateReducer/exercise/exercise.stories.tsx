import type { Meta, StoryObj } from '@storybook/react';

import { Exercise } from './exercise';

const meta: Meta<typeof Exercise> = {
  title: 'Lessons/🥈 Silver/⚙️ State Reducer Pattern/02-Exercise',
  component: Exercise
};

export default meta;
type Story = StoryObj<typeof Exercise>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  play: async () => {},
  args: {}
};
