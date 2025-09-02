import { createContext, useContext, useMemo, useState } from 'react';
import {
  IPokemonManagerState,
  PokemonManager
} from '@shared/modules/PokemonManager/PokemonManager';

export interface IPokemonProviderState extends IPokemonManagerState {
  fetchPokemons: (total: number) => Promise<void>;
}
const PokemonContext = createContext<IPokemonProviderState | null>(
  null
);

export const usePokemonProvider = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      'You can only use usePokemonProvider within the PokemonProvider'
    );
  }

  return context;
};

export const PokemonProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [pokemonManagerState, setPokemonManagerState] = useState(
    new PokemonManager().getState()
  );

  const pokemonManager = useMemo(() => new PokemonManager(), []);

  const fetchPokemons = async (total: number) => {
    await pokemonManager.fetchPokemons(total);
    setPokemonManagerState(pokemonManager.getState());
  };

  const state = useMemo(
    () => ({
      fetchPokemons,
      ...pokemonManagerState
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pokemonManagerState]
  );

  return (
    <PokemonContext.Provider value={state}>
      {children}
    </PokemonContext.Provider>
  );
};
