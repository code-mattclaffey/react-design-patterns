import type { Meta, StoryObj } from '@storybook/react';

import { Exercise } from './exercise';

const meta: Meta<typeof Exercise> = {
  title: 'Lessons/🥉 Bronze/Props Combination Pattern/02-Exercise',
  component: Exercise
};

export default meta;
type Story = StoryObj<typeof Exercise>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Default: Story = {
  args: {
    title: 'The Coldest Sunset Festival',
    subText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    ctaText: '#festival',
    ctaUrl: '/',
    imageAltText: 'DJ playing at a festival',
    imageUrlMobile:
      'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=767&h=640&fit=crop',
    imageUrlTablet:
      'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1024&h=640&fit=crop',
    imageUrlDesktop:
      'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1600&h=900&fit=crop',
    containerClassName: 'containerClassName',
    titleClassName: 'titleClassName',
    subTextClassName: 'subTextClassName',
    ctaClassName: 'ctaClassName',
    imageClassName: 'imageClassName'
  }
};
