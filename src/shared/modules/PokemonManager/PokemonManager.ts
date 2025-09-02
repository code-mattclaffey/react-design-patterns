export interface IPokemon {
  id: string;
  name: string;
  imageUrl: string;
}

interface IPokemonApiResponse {
  id: string;
  name: string;
  images: {
    small: string;
  };
}

export interface IPokemonManagerState {
  pokemons: IPokemon[];
}

export class PokemonManager {
  public pokemons: IPokemon[] = [];

  constructor() {}

  async fetchPokemons(total: number): Promise<void> {
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?pageSize=${total}`
      );

      const json = await response.json();

      this.pokemons = json.data.map(
        (pokemon: IPokemonApiResponse) => ({
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.images.small
        })
      );

      console.log('Pokémon fetched successfully:', this.pokemons.length, 'items');
    } catch (error) {
      console.error('Failed to fetch Pokemon:', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  getState(): IPokemonManagerState {
    return this;
  }
}
