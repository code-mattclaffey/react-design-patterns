import type { Meta, StoryObj } from '@storybook/react';

import { Final } from './final';

const meta: Meta<typeof Final> = {
  title: 'Lessons/🥉 Bronze/Props Combination Pattern/03-Final',
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
    pokemon: {
      name: 'Pikachu',
      type: 'Electric',
      hp: 120,
      level: 25
    },
    attack: {
      name: 'Thunderbolt',
      damage: 90,
      description: 'A strong electric blast that may paralyze the target.'
    },
    image: {
      alt: 'Pikachu with electric sparks',
      sources: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
      ]
    },
    styling: {
      card: 'shadow-xl border-yellow-400',
      name: 'text-yellow-600',
      type: 'bg-yellow-500',
      hp: 'text-yellow-700',
      attack: 'border-yellow-400',
      image: 'hover:scale-105 transition-transform'
    }
  }
};
