import type { Meta, StoryObj } from '@storybook/react';

import { BrandPageOne, BrandPageTwo } from './final';

const meta: Meta<typeof BrandPageOne> = {
  title:
    'Lessons/🥉 Bronze/Presentational & Container Pattern/03-Final',
  component: BrandPageOne
};

export default meta;
type Story = StoryObj<typeof BrandPageOne>;

export const PageOne: Story = {
  play: async () => {},
  args: {},
  render: () => <BrandPageOne />
};

export const PageTwo: Story = {
  play: async () => {},
  args: {},
  render: () => <BrandPageTwo />
};
