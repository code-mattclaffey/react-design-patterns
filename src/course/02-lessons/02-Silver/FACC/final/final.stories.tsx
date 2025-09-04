import type { Meta, StoryObj } from '@storybook/react';
import { Final } from './final';

const meta: Meta<typeof Final> = {
  title: 'Lessons/🥈 Silver/🎯 FACC Pattern/Final',
  component: Final,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};