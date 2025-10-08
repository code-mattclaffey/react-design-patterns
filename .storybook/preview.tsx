import React from 'react';
import type { Preview } from '@storybook/react';
import { Analytics } from '@vercel/analytics/react';
import { Code } from './components/CodeBlock';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { http, HttpResponse } from 'msw';

import 'tailwindcss/tailwind.css';
import './styles/docs.styles.css';

initialize();

const mockPokemonCards = [
  // Grass Type Pokemon
  {
    id: 'grass-1',
    name: 'Venusaur',
    types: ['Grass'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/15.png' }
  },
  {
    id: 'grass-2',
    name: 'Ivysaur',
    types: ['Grass'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/30.png' }
  },
  {
    id: 'grass-3',
    name: 'Bulbasaur',
    types: ['Grass'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/44.png' }
  },
  {
    id: 'grass-4',
    name: 'Scyther',
    types: ['Grass'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/26.png' }
  },

  // Fire Type Pokemon
  {
    id: 'fire-1',
    name: 'Charizard',
    types: ['Fire'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/4.png' }
  },
  {
    id: 'fire-2',
    name: 'Charmeleon',
    types: ['Fire'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/24.png' }
  },
  {
    id: 'fire-3',
    name: 'Charmander',
    types: ['Fire'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/46.png' }
  },
  {
    id: 'fire-4',
    name: 'Arcanine',
    types: ['Fire'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/23.png' }
  },

  // Water Type Pokemon
  {
    id: 'water-1',
    name: 'Blastoise',
    types: ['Water'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/2.png' }
  },
  {
    id: 'water-2',
    name: 'Wartortle',
    types: ['Water'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/42.png' }
  },
  {
    id: 'water-3',
    name: 'Squirtle',
    types: ['Water'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/63.png' }
  },
  {
    id: 'water-4',
    name: 'Gyarados',
    types: ['Water'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/6.png' }
  },

  // Electric Type Pokemon
  {
    id: 'electric-1',
    name: 'Pikachu',
    types: ['Lightning'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/58.png' }
  },
  {
    id: 'electric-2',
    name: 'Raichu',
    types: ['Lightning'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/14.png' }
  },
  {
    id: 'electric-3',
    name: 'Zapdos',
    types: ['Lightning'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/16.png' }
  },
  {
    id: 'electric-4',
    name: 'Electabuzz',
    types: ['Lightning'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/20.png' }
  },

  // Psychic Type Pokemon
  {
    id: 'psychic-1',
    name: 'Mewtwo',
    types: ['Psychic'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/10.png' }
  },
  {
    id: 'psychic-2',
    name: 'Alakazam',
    types: ['Psychic'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/1.png' }
  },
  {
    id: 'psychic-3',
    name: 'Kadabra',
    types: ['Psychic'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/32.png' }
  },
  {
    id: 'psychic-4',
    name: 'Abra',
    types: ['Psychic'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/43.png' }
  },

  // Fighting Type Pokemon
  {
    id: 'fighting-1',
    name: 'Machamp',
    types: ['Fighting'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/8.png' }
  },
  {
    id: 'fighting-2',
    name: 'Machoke',
    types: ['Fighting'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/34.png' }
  },
  {
    id: 'fighting-3',
    name: 'Machop',
    types: ['Fighting'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/52.png' }
  },
  {
    id: 'fighting-4',
    name: 'Hitmonlee',
    types: ['Fighting'],
    supertype: 'pokemon',
    images: { small: 'https://images.pokemontcg.io/base1/22.png' }
  }
];

const mockPokemonTypes = [
  'Grass',
  'Fire',
  'Water',
  'Lightning',
  'Psychic',
  'Fighting',
  'Darkness',
  'Metal',
  'Fairy',
  'Dragon',
  'Colorless'
];

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://api.pokemontcg.io/v2/cards',
          ({ request }) => {
            const url = new URL(request.url);
            const pageSize = parseInt(
              url.searchParams.get('pageSize') || '10'
            );
            const query = url.searchParams.get('q') || '';

            let filteredCards = mockPokemonCards;

            // Filter by type if specified in query
            if (query.includes('types:')) {
              const typeMatch = query.match(/types:([^&]+)/);
              if (typeMatch) {
                const requestedType = typeMatch[1];
                filteredCards = mockPokemonCards.filter((card) =>
                  card.types.includes(requestedType)
                );
              }
            }

            // Filter by supertype if specified
            if (query.includes('supertype:')) {
              const supertypeMatch = query.match(/supertype:([^&]+)/);
              if (supertypeMatch) {
                const requestedSupertype = supertypeMatch[1];
                filteredCards = filteredCards.filter(
                  (card) => card.supertype === requestedSupertype
                );
              }
            }

            const data = filteredCards.slice(0, pageSize);

            return HttpResponse.json({
              data,
              page: 1,
              pageSize,
              count: data.length,
              totalCount: filteredCards.length
            });
          }
        ),

        // Types endpoint
        http.get('https://api.pokemontcg.io/v2/types', () => {
          return HttpResponse.json({
            data: mockPokemonTypes
          });
        })
      ]
    },
    docs: {
      components: {
        code: Code
      }
    },
    storySort: [
      'Introduction',
      'Lessons',
      ['🥉 Bronze', '🥈 Silver', '🥇 Gold'],
      'Recipes'
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
        <Analytics />
      </div>
    )
  ]
};

export default preview;
