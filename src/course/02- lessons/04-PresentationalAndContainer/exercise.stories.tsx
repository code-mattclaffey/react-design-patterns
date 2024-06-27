import type { Meta, StoryObj } from '@storybook/react';

import { BrandPageOne, BrandPageTwo } from './exercise';

const meta: Meta<typeof BrandPageOne> = {
  title:
    'Lessons/04 - Presentational & Container Pattern/02-Exercise',
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
