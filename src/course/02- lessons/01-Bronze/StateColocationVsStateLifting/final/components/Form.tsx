import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonTypesApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';
import classNames from 'classnames';
import { FormEvent, useState } from 'react';

interface IForm {
  onPokemonTypesUpdate: (types: string[]) => void;
}

export const Form = ({ onPokemonTypesUpdate }: IForm) => {
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState<
    string[]
  >([]);

  const { data, isLoading } = usePokedex<TPokemonTypesApiResponse[]>({
    path: 'types',
    queryParams: 'pageSize=8'
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (selectedPokemonTypes.length === 4) {
      onPokemonTypesUpdate(selectedPokemonTypes);
    }
  };

  const onPokemonTypeSelection = (type: string) => {
    if (selectedPokemonTypes.includes(type)) {
      setSelectedPokemonTypes(
        selectedPokemonTypes.filter(
          (pokemonType) => pokemonType !== type
        )
      );
    } else {
      setSelectedPokemonTypes([...selectedPokemonTypes, type]);
    }
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
                selectedPokemonTypes.includes(pokemonType);
              const hasSelectedAllOptions =
                selectedPokemonTypes.length === 4;

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
