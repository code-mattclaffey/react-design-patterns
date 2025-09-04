import { useState } from 'react';
// Utilities provided for you:
// import { delay } from '../utils/delay';
// import { PokemonLoader } from '../utils/PokemonLoader';

/*
  * Observations
  * 💅 All Pokemon components are imported upfront
  * Large initial bundle size even if user doesn't view all Pokemon
  * No loading states for heavy components

  * Available utilities (already provided):
  * - import { delay } from '../utils/delay';
  * - import { PokemonLoader } from '../utils/PokemonLoader';

  * Tasks
  * 1A 👨🏻💻 - Move Pokemon components to separate files with default exports
  * 1B 👨🏻💻 - Add use(delay(ms)) to each component with cached promises
  * 1C 👨🏻💻 - Convert imports to React.lazy() dynamic imports
  * 1D 👨🏻💻 - Wrap Pokemon components with Suspense using PokemonLoader
  * 1E 👨🏻💻 - Test that components show loading states and resolve correctly
*/

// Heavy Pokemon detail components (simulating large components)
const PikachuDetails = () => (
  <div className="bg-yellow-50 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-yellow-800 mb-4">
      Pikachu
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold mb-2">Stats</h3>
        <p>HP: 35</p>
        <p>Attack: 55</p>
        <p>Defense: 40</p>
        <p>Speed: 90</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Abilities</h3>
        <p>Static</p>
        <p>Lightning Rod (Hidden)</p>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="font-bold mb-2">Description</h3>
      <p>
        This Pokemon has electricity-storing pouches on its cheeks.
        These appear to become electrically charged during the night
        while Pikachu sleeps.
      </p>
    </div>
  </div>
);

const CharizardDetails = () => (
  <div className="bg-red-50 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-red-800 mb-4">
      Charizard
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold mb-2">Stats</h3>
        <p>HP: 78</p>
        <p>Attack: 84</p>
        <p>Defense: 78</p>
        <p>Speed: 100</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Abilities</h3>
        <p>Blaze</p>
        <p>Solar Power (Hidden)</p>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="font-bold mb-2">Description</h3>
      <p>
        Charizard flies around the sky in search of powerful
        opponents. It breathes fire of such great heat that it melts
        anything.
      </p>
    </div>
  </div>
);

const BlastoiseDetails = () => (
  <div className="bg-blue-50 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">
      Blastoise
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold mb-2">Stats</h3>
        <p>HP: 79</p>
        <p>Attack: 83</p>
        <p>Defense: 100</p>
        <p>Speed: 78</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Abilities</h3>
        <p>Torrent</p>
        <p>Rain Dish (Hidden)</p>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="font-bold mb-2">Description</h3>
      <p>
        Blastoise has water spouts that protrude from its shell. The
        water spouts are very accurate and can punch through thick
        steel.
      </p>
    </div>
  </div>
);

export const PokemonEncyclopedia = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<
    string | null
  >(null);

  const renderPokemonDetails = () => {
    switch (selectedPokemon) {
      case 'pikachu':
        return <PikachuDetails />;
      case 'charizard':
        return <CharizardDetails />;
      case 'blastoise':
        return <BlastoiseDetails />;
      default:
        return (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">
              Select a Pokemon to view details
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Pokemon Encyclopedia
      </h1>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setSelectedPokemon('pikachu')}
          className={`px-4 py-2 rounded ${
            selectedPokemon === 'pikachu'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Pikachu
        </button>
        <button
          onClick={() => setSelectedPokemon('charizard')}
          className={`px-4 py-2 rounded ${
            selectedPokemon === 'charizard'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Charizard
        </button>
        <button
          onClick={() => setSelectedPokemon('blastoise')}
          className={`px-4 py-2 rounded ${
            selectedPokemon === 'blastoise'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Blastoise
        </button>
      </div>

      {renderPokemonDetails()}
    </div>
  );
};

export const Exercise = () => {
  return <PokemonEncyclopedia />;
};
