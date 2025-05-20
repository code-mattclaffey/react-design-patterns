import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within, expect } from '@storybook/test';
import { ComponentOne } from './final';

const meta: Meta<typeof ComponentOne> = {
  title: 'Lessons/🥉 Bronze/Conditional Rendering Pattern/03-Final',
  component: ComponentOne
};

export default meta;
type Story = StoryObj<typeof ComponentOne>;

const username = 'John Doe';

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Login' })
    );

    await expect(
      canvas.getByText(`Welcome ${username}`)
    ).toBeInTheDocument();
    await expect(
      canvas.queryByRole('button', { name: 'Login' })
    ).toBeNull();

    await userEvent.click(
      canvas.getByRole('button', { name: 'Logout' })
    );

    await expect(
      canvas.queryByText(`Welcome ${username}`)
    ).toBeNull();
    await expect(
      canvas.queryByRole('button', { name: 'Logout' })
    ).toBeNull();
  },
  args: {
    username
  }
};
