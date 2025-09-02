import { useState } from 'react';
import { Form } from './Form';
import { PokemonOptions } from './PokemonOptions';

export const Screen = () => {
  // 🪜 State Lifting: Setting up shared state variables so the components in this scope can read and use them
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState<
    string[]
  >([]);

  // 🪜 State Lifting: Setting up shared state variables so the components in this scope can read and use them
  const [selectedPokemon, setSelectedPokemon] = useState<
    Record<string, string[]>
  >({});

  // 🪜 State Lifting: Setting up a function which will update the state instead of bleeding this complexity into the UI component.
  const onPokemonTypesUpdate = (types: string[]) => {
    const newlyUpdatedPokemon = { ...selectedPokemon };
    const typesSet = new Set(types);

    // Remove types that are no longer selected
    selectedPokemonTypes.forEach((type) => {
      if (!typesSet.has(type)) {
        delete newlyUpdatedPokemon[type];
      }
    });

    setSelectedPokemon(newlyUpdatedPokemon);
    setSelectedPokemonTypes(types);
  };

  // 🪜 State Lifting: Setting up a function which will update the state instead of bleeding this complexity into the UI component.
  const onPokemonSelection = (pokemon: string[], type: string) => {
    const newPokemon = { ...selectedPokemon };
    newPokemon[type] = pokemon;
    setSelectedPokemon(newPokemon);
  };

  return (
    <main className="h-screen p-6">
      <img
        src="/pokemon-battleground.webp"
        alt="Pokemon battleground background"
        className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-0 h-full w-full object-cover"
      />
      <div className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-10 h-full w-full bg-black opacity-25" />
      <div className="relative z-20 max-w-[768px] mx-auto text-center">
        <div>
          <h1 className="text-center">
            <img
              src="/pokemon-logo.png"
              alt="Pokemon Battle Picker"
              className="inline-block w-96"
            />
            <span className="text-[76px] font-bold mb-4 block text-yellow-400 text-shadow-lg text-shadow-blue-600">
              Battle Picker
            </span>
          </h1>
        </div>
        <div>
          <Form onPokemonTypesUpdate={onPokemonTypesUpdate} />
        </div>
        <div>
          {selectedPokemonTypes.map((pokemonType, index) => (
            <PokemonOptions
              type={pokemonType}
              key={`${pokemonType}-${index}`}
              onPokemonSelection={onPokemonSelection}
              defaultSelectedPokemon={selectedPokemon[pokemonType]}
            />
          ))}
        </div>

        {Object.keys(selectedPokemon).length === 4 &&
          selectedPokemonTypes.length === 4 && (
            <button
              type="button"
              className="my-12 rounded-lg py-6 px-16 text-white text-2xl font-bold bg-blue-900 hover:bg-blue-950 focus-within:bg-blue-950"
              onClick={() => alert('Ready for battle!')}
            >
              Begin Battle
            </button>
          )}
      </div>
    </main>
  );
};
