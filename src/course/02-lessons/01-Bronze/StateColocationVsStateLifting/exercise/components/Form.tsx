import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonTypesApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';
import classNames from 'classnames';
import { FormEvent } from 'react';

// 🧑🏻‍💻 1.f: we need to pass a prop called onPokemonTypesUpdate which will take a string[] setup the interface and suppky the parameter to the Form component.

export const Form = () => {
  // 🧑🏻‍💻 1.c: Setup a useState<string[]> state colocation variable called selectedPokemonTypes, setSelectedPokemonTypes which will have a default of []

  // ✍🏻  This is already done for you. Feel free to have a look how it works in shared/hooks/usePokedex
  const { data, isLoading } = usePokedex<TPokemonTypesApiResponse[]>({
    path: 'types',
    queryParams: 'pageSize=8'
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 🧑🏻‍💻 1.g: now we want to validate whether the selectedPokemonTypes have 4 items in the array before we call onPokemonTypesUpdate(selectedPokemonTypes).

    // Once completed, head over to Screen.tsx as the Form component will be complaining about a missing prop.
  };

  const onPokemonTypeSelection = (type: string) => {
    // 💣 We can get rid of this line once we start using the type param.
    console.log(type);
    // 🧑🏻‍💻 1.e: we need to check IF the selectedPokemonTypes already has the selectedType
    // because we need to toggle it on and off. If it is selected, we just setSelectedPokemonTypes with the filtered out type
    // if it's not in there then we set the type [...selectedPokemonTypes, type];
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4 block text-yellow-400">
        Select you favorite pokemon types (max 4)
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
            <Skeleton height="h-[48px]" />
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {data &&
            data.length &&
            data.map((pokemonType) => {
              const isSelected =
                // 🧑🏻‍💻 1.d: replace the empty array with the selectedPokemonTypes state variable.
                // 💣 We can remove these ignores when we apply the code
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                [].includes(pokemonType);
              const hasSelectedAllOptions = [].length === 4;

              return (
                <label
                  key={pokemonType}
                  className={classNames(
                    'bg-white p-3 font-bold rounded-md cursor-pointer relative',
                    !hasSelectedAllOptions &&
                      !isSelected &&
                      'hover:bg-slate-200 focus-within:bg-slate-200',
                    isSelected &&
                      'bg-blue-600 text-white focus-within:bg-blue-700 hover:bg-blue-700',
                    hasSelectedAllOptions &&
                      !isSelected &&
                      'opacity-80 cursor-not-allowed'
                  )}
                >
                  {pokemonType}
                  <input
                    type="checkbox"
                    className="overflow-hidden h-0 w-0 absolute right-0 top-0 -z-10"
                    id={pokemonType}
                    name={pokemonType}
                    value={pokemonType}
                    onChange={() =>
                      onPokemonTypeSelection(pokemonType)
                    }
                    disabled={hasSelectedAllOptions && !isSelected}
                  />
                </label>
              );
            })}
        </div>

        <button
          type="submit"
          className="mt-6 rounded-sm py-3 px-12 text-white font-bold bg-blue-900 hover:bg-blue-950 focus-within:bg-blue-950"
        >
          Catch them all
        </button>
      </form>
    </section>
  );
};
