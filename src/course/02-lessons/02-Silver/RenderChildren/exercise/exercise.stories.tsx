import type { Meta, StoryObj } from '@storybook/react';
import { Exercise } from './exercise';

const meta: Meta<typeof Exercise> = {
  title: 'Lessons/🥈 Silver/🔄 Render Children Pattern/Exercise',
  component: Exercise,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};