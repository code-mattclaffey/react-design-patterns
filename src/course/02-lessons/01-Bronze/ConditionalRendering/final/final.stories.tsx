import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within, expect } from '@storybook/test';

import { PokemonTrainerStatus } from './final';

const meta: Meta<typeof PokemonTrainerStatus> = {
  title:
    'Lessons/🥉 Bronze/🔀 Conditional Rendering Pattern/03-Final',
  component: PokemonTrainerStatus
};

export default meta;
type Story = StoryObj<typeof PokemonTrainerStatus>;

const trainerName = 'Ash';

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: '🎯 Challenge Gym Leader' })
    );

    await expect(
      canvas.getByText(`Welcome Gym Leader ${trainerName}! 🏆`)
    ).toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole('button', { name: '🔄 Reset Journey' })
    );

    await expect(
      canvas.getByRole('button', { name: '🎯 Challenge Gym Leader' })
    ).toBeInTheDocument();
  },
  args: {
    trainerName
  }
};