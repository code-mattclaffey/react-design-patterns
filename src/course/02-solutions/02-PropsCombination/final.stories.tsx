import type { Meta, StoryObj } from '@storybook/react';

import { Final } from './final';

const meta: Meta<typeof Final> = {
  title: 'Lessons/02 - Props Combination Pattern/03-Final',
  component: Final
};

export default meta;
type Story = StoryObj<typeof Final>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  args: {
    title: 'The Coldest Sunset Festival',
    subText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    cta: {
      text: '#festival',
      url: '/'
    },
    image: {
      alt: 'DJ playing at a festival',
      images: [
        'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=767&h=640&fit=crop',
        'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1024&h=640&fit=crop',
        'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1600&h=900&fit=crop'
      ]
    },
    classNames: {
      container: 'container',
      title: 'title',
      subText: 'subText',
      cta: 'cta',
      image: 'image'
    }
  }
};
