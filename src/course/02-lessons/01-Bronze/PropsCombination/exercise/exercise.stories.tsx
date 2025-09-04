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
    pokemonName: 'Charizard',
    pokemonType: 'Fire/Flying',
    pokemonHp: 180,
    pokemonLevel: 55,
    attackName: 'Fire Blast',
    attackDamage: 120,
    attackDescription: 'A powerful fire attack that may leave the target with a burn.',
    imageAltText: 'Charizard breathing fire',
    imageUrlSmall: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    imageUrlMedium: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    imageUrlLarge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    cardClassName: 'shadow-xl',
    nameClassName: 'text-red-600',
    typeClassName: 'bg-red-500',
    hpClassName: 'text-red-700',
    attackClassName: 'border-red-400',
    imageClassName: 'hover:scale-105 transition-transform'
  }
};
