import { Dispatch, useEffect, useReducer } from 'react';
import {
  IPokemon,
  PokemonManager
} from '../../../shared/modules/PokemonManager/PokemonManager';

interface IPokemonReducerState {
  pokemons?: IPokemon[];
  isLoading: boolean;
  hasError: boolean;
}

enum ActionNames {
  LOADING_POKEMONS = 'LOADING_POKEMONS',
  RECEIVED_POKEMONS = 'RECEIVED_POKEMONS',
  ERROR_POKEMONS = 'ERROR_POKEMONS'
}

interface IActionType {
  payload?: IPokemon[];
  type: ActionNames;
}

const fetchPokemons = async (dispatch: Dispatch<IActionType>) => {
  const pokemonManager = new PokemonManager();
  dispatch({ type: ActionNames.LOADING_POKEMONS });

  try {
    await pokemonManager.fetchPokemons(12);
    const pokemoneState = pokemonManager.getState();
    dispatch({
      type: ActionNames.RECEIVED_POKEMONS,
      payload: pokemoneState.pokemons
    });
  } catch (e) {
    dispatch({ type: ActionNames.ERROR_POKEMONS });
    console.error(e);
  }
};

const pokemonReducer = (
  state: IPokemonReducerState,
  action: IActionType
) => {
  switch (action.type) {
    case ActionNames.RECEIVED_POKEMONS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload ?? []
      };
    case ActionNames.LOADING_POKEMONS:
      return {
        ...state,
        isLoading: true,
        pokemons: []
      };
    case ActionNames.ERROR_POKEMONS:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        pokemons: []
      };
    default:
      return state;
  }
};

export const Final = () => {
  const [{ pokemons, isLoading, hasError }, dispatch] = useReducer(
    pokemonReducer,
    {
      pokemons: [],
      isLoading: false,
      hasError: false
    }
  );

  useEffect(() => {
    fetchPokemons(dispatch);
  }, []);

  if (hasError) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong> <br />
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <section>
        <div className="animate-pulse bg-slate-300 rounded-lg h-12 w-96 mb-4" />
        <div className="grid grid-cols-6 gap-6">
          {[...new Array(12)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-slate-300 rounded-lg p-4 h-60"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Pokemon Cards</h2>
      <div className="grid grid-cols-6 gap-6">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => (
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
