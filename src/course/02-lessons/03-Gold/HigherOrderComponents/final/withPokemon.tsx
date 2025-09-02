import { useMemo, useState } from 'react';
import {
  IPokemonManagerState,
  PokemonManager
} from '@shared/modules/PokemonManager/PokemonManager';

export interface IPokemonManagerActions {
  fetchPokemons: (total: number) => Promise<void>;
}

export const withPokemons = <
  TMapperResponse,
  TActionResponse,
  TProps
>(
  mapper: (state: IPokemonManagerState) => TMapperResponse,
  actions: (actions: IPokemonManagerActions) => TActionResponse
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (Component: any) => (props: TProps) => {
    const pokemonManager = useMemo(() => new PokemonManager(), []);
    const [pokemonManagerState, setPokemonManagerState] = useState(
      pokemonManager.getState()
    );

    return (
      <Component
        {...props}
        {...mapper(pokemonManagerState)}
        {...actions({
          fetchPokemons: async (total: number) => {
            await pokemonManager.fetchPokemons(total);
            setPokemonManagerState(pokemonManager.getState());
          }
        })}
      />
    );
  };
};
