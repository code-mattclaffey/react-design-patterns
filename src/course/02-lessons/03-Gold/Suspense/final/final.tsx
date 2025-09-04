import { Suspense, lazy, useState } from 'react';
import { PokemonLoader } from '../utils/PokemonLoader';

// Lazy load Pokemon components - only loaded when needed
const PikachuDetails = lazy(
  () => import('./components/PikachuDetails')
);
const CharizardDetails = lazy(
  () => import('./components/CharizardDetails')
);
const BlastoiseDetails = lazy(
  () => import('./components/BlastoiseDetails')
);

export const PokemonEncyclopedia = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<
    string | null
  >(null);

  const renderPokemonDetails = () => {
    if (!selectedPokemon) {
      return (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">
            Select a Pokemon to view details
          </p>
        </div>
      );
    }

    // Each component is wrapped in Suspense for individual loading states
    switch (selectedPokemon) {
      case 'pikachu':
        return (
          <Suspense fallback={<PokemonLoader />}>
            <PikachuDetails />
          </Suspense>
        );
      case 'charizard':
        return (
          <Suspense fallback={<PokemonLoader />}>
            <CharizardDetails />
          </Suspense>
        );
      case 'blastoise':
        return (
          <Suspense fallback={<PokemonLoader />}>
            <BlastoiseDetails />
          </Suspense>
        );
      default:
        return null;
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

export const Final = () => {
  return (
    <div className="space-y-6">
      <PokemonEncyclopedia />
    </div>
  );
};
