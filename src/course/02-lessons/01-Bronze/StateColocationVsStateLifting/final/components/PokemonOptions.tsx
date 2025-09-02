import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonCardsApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';
import classNames from 'classnames';
import { FormEvent, useState } from 'react';

interface IPokemonOptions {
  type: string;
  onPokemonSelection: (pokemonIds: string[], type: string) => void;
  defaultSelectedPokemon?: string[];
}

export const PokemonOptions = ({
  type,
  onPokemonSelection,
  defaultSelectedPokemon = []
}: IPokemonOptions) => {
  // 🧼 State Colocation: we only want to have 2 cards in each component selected and use that for validation.
  const [selectedPokemon, setSelectedPokemon] = useState<string[]>(
    // 🪜 State Lifting: We inherit the lifted state to maintain the selected options when we change pokemon types.
    defaultSelectedPokemon
  );

  // 🧼 State Colocation: We want to only call this api for the type provided and not all the types selected.
  const { data, isLoading, isError } = usePokedex<
    TPokemonCardsApiResponse[]
  >({
    path: 'cards',
    queryParams: `pageSize=4&q=types:${type}&supertype:pokemon`,
    skip: type === undefined
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 🪜 State Lifting passing a function in as a prop to update the state above.
    onPokemonSelection(selectedPokemon, type);
  };

  const togglePokemonSelection = (pokemonId: string) => {
    if (selectedPokemon.includes(pokemonId)) {
      setSelectedPokemon(
        selectedPokemon.filter(
          (selectedPokemonId) => selectedPokemonId !== pokemonId
        )
      );
    } else {
      const newlySelectedPokemon = [...selectedPokemon, pokemonId];
      // 🧼 State Colocation: Updating the visual state of the selected pokemon.
      setSelectedPokemon(newlySelectedPokemon);

      if (newlySelectedPokemon.length === 2) {
        // 🪜 State Lifting passing a function in as a prop to update the state above.
        onPokemonSelection(newlySelectedPokemon, type);
      }
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-[32px] mb-4 font-bold block text-yellow-400 text-shadow-lg text-shadow-blue-600">
        {type} Pokemon
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-[768px]">
              <Skeleton height="h-[207px]" width="w-full" />
              <Skeleton height="h-[207px]" width="w-full" />
              <Skeleton height="h-[207px]" width="w-full" />
              <Skeleton height="h-[207px]" width="w-full" />
            </div>
          )}
          <div
            className={classNames(
              'grid grid-cols-2 md:grid-cols-4 gap-1 max-w-[768px] transition-opacity',
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
          >
            {data &&
              data.length > 0 &&
              data.map((pokemonCard) => {
                const isSelected = selectedPokemon.find(
                  (pokemonId) => pokemonId === pokemonCard.id
                );
                const allPokemonSelected =
                  selectedPokemon.length === 2;

                return (
                  <label
                    key={pokemonCard.id}
                    className={classNames(
                      'border-solid border-[6px] focus-within:border-blue-600 rounded-lg relative',
                      isSelected
                        ? 'border-yellow-600'
                        : 'border-transparent',
                      !isSelected && allPokemonSelected
                        ? 'cursor-default'
                        : 'cursor-pointer'
                    )}
                  >
                    <img
                      src={pokemonCard.images.small}
                      alt={pokemonCard.name}
                      className={classNames(
                        !isSelected && allPokemonSelected
                          ? 'opacity-70'
                          : 'opacity-100'
                      )}
                    />
                    <input
                      type="checkbox"
                      value={pokemonCard.id}
                      checked={selectedPokemon.includes(
                        pokemonCard.id
                      )}
                      onChange={() =>
                        togglePokemonSelection(pokemonCard.id)
                      }
                      className="overflow-hidden h-0 w-0 absolute right-0 top-0 -z-10"
                      disabled={!isSelected && allPokemonSelected}
                    />
                  </label>
                );
              })}
          </div>

          <button
            type="submit"
            className="hidden"
            disabled={isLoading || isError}
          >
            Select Pokemon
          </button>
        </fieldset>
      </form>
    </section>
  );
};
