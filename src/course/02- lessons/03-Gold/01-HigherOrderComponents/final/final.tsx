import { useEffect } from 'react';
import { IPokemonManagerActions, withPokemons } from './withPokemon';
import {
  IPokemon,
  IPokemonManagerState
} from '@shared/modules/PokemonManager/PokemonManager';

interface IMapStateToPropsComponentOneResponse {
  pokemons: IPokemon[];
}

interface IActionsComponentOneResponse {
  fetchPokemons: (total: number) => Promise<void>;
}

interface IComponentOneProps
  extends IMapStateToPropsComponentOneResponse,
    IActionsComponentOneResponse {
  title: string;
}

const mapStateToProps = (
  state: IPokemonManagerState
): IMapStateToPropsComponentOneResponse => ({
  pokemons: state.pokemons
});

const mapActionsToProps = (
  actions: IPokemonManagerActions
): IActionsComponentOneResponse => ({
  fetchPokemons: actions.fetchPokemons
});

const Component = ({
  pokemons,
  title,
  fetchPokemons
}: IComponentOneProps) => {
  useEffect(() => {
    fetchPokemons(12);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-6 gap-6">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export const Final = withPokemons<
  IMapStateToPropsComponentOneResponse,
  IActionsComponentOneResponse
>(
  mapStateToProps,
  mapActionsToProps
)(Component);
