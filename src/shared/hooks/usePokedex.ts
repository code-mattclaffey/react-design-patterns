// define the api types like a generic

import { useEffect, useReducer } from 'react';

export type TPokemonCardsApiResponse = {
  id: string;
  name: string;
  images: {
    small: string;
  };
};

export type TPokemonTypesApiResponse = string;

type TTypesApi = {
  path: 'types';
  skip?: boolean;
  queryParams?: string;
};

type TCardsApi = {
  path: 'cards';
  queryParams?: string;
  skip?: boolean;
};

interface IUsePokedexState<TResponse> {
  data?: TResponse;
  isError?: boolean;
  isLoading?: boolean;
}

const usePokedexReducer = <TResponse>(
  state: IUsePokedexState<TResponse>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload?: any }
): IUsePokedexState<TResponse> => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, isLoading: false, data: action.payload };
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ERROR':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const usePokedex = <TResponse>({
  path,
  queryParams = '',
  skip = false
}: TCardsApi | TTypesApi): IUsePokedexState<TResponse> => {
  const [state, dispatch] = useReducer(usePokedexReducer<TResponse>, {
    isError: false,
    isLoading: false,
    data: undefined
  });

  useEffect(() => {
    if (skip) return;

    const getData = async () => {
      try {
        dispatch({ type: 'LOADING' });
        const response = await fetch(
          `https://api.pokemontcg.io/v2/${path}?${queryParams}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();

        dispatch({ type: 'SUCCESS', payload: json.data });
      } catch (e) {
        dispatch({ type: 'ERROR' });
        console.error('Failed to fetch Pokemon data:', e instanceof Error ? e.message : 'Unknown error');
      }
    };

    getData();
  }, [skip, path, queryParams]);

  return state;
};
