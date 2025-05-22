import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonCardsApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';
import classNames from 'classnames';
import { FormEvent } from 'react';

interface IPokemonOptions {
  type: string;
  // 🧑🏻‍💻 2.h: Add two new props called onPokemonSelection which takes a string[] and string as params and another
  // variable called defaultSelectedPokemon which is an optional string[].
}

export const PokemonOptions = ({ type }: IPokemonOptions) => {
  // 🧑🏻‍💻 2.d: Create a selectedPokemon useState<string[]> variable. Default value to be []

  // 🧑🏻‍💻 2.i: Replace the default of selectedPokemon from [] to the defaultSelectedPokemon. This will remember which cards were selected when the component re-renders.

  // ✍🏻 This is already done for you. Feel free to have a look how it works in shared/hooks/usePokedex
  const { data, isLoading, isError } = usePokedex<
    TPokemonCardsApiResponse[]
  >({
    path: 'cards',
    queryParams: `pageSize=4&q=types:${type}&supertype:pokemon`,
    skip: type === undefined
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 🧑🏻‍💻 2.j: call onPokemonSelection(selectedPokemon, type);
  };

  // 💣 Can remove this comment once the code has been written
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const togglePokemonSelection = (pokemonId: string) => {
    // 🧑🏻‍💻 2.g: We need to now update the state for when a pokemon card is selected or not.
    // IF selectedPokemon includes the pokemonId then we need to de-select that pokemon card.
    // ELSE we add the pokemon id to the array of pokemon cards [...selectedPokemon, pokemonId] and then setSelectedPokemon(newValues) (make this a variable as we will need it for later.)
    // You should now start to see the pokemon being selected and de-selected. But the next thing we need to do is update the state within the screen. Search for 2.h
    // 🧑🏻‍💻 2.k: Inside the ELSE, check if the newlySelectedPokemon has the length of 2. IF it does, call onPokemonSelection(newlySelectedPokemon, type);. Head over to the Screen.tsx component to finish it off.
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
                // 🧑🏻‍💻 2.e: Replace the empty arrays with the selectedPokemon variable we created.
                const isSelected = [].find(
                  (pokemonId) => pokemonId === pokemonCard.id
                );
                const allPokemonSelected = [].length === 2;

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
                      // 🧑🏻‍💻 2.f: Replace the empty array with the selectedPokemon variable we created.
                      checked={[].includes(
                        // 💣 We can get ride of this one we replace the empty array.
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
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
