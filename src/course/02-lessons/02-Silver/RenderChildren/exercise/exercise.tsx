import { useState, useEffect } from 'react';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  hp: number;
}

/*
  * Observations
  * 💅 Search component has hardcoded display for all states
  * Loading, success, and error displays are tightly coupled

  * Tasks
  * 1A 💻 - Add render props to IPokemonSearchProps:
  * renderLoading: () => React.ReactNode;
  * renderSuccess: (pokemon: IPokemon[]) => React.ReactNode;
  * renderError: (error: string) => React.ReactNode;
  *
  * 1B 💻 - Replace hardcoded JSX with render function calls
  * 1C 💻 - In Exercise component, provide render functions for each state
*/

interface IPokemonSearchProps {
  searchTerm: string;
}

const mockPokemon: IPokemon[] = [
  { id: 1, name: 'Pikachu', type: 'Electric', hp: 35 },
  { id: 4, name: 'Charmander', type: 'Fire', hp: 39 },
  { id: 7, name: 'Squirtle', type: 'Water', hp: 44 },
  { id: 25, name: 'Pichu', type: 'Electric', hp: 20 }
];

export const PokemonSearch = ({
  searchTerm
}: IPokemonSearchProps) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Simulate API call
  const searchPokemon = async (term: string) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (term === 'error') {
        throw new Error('Pokemon not found!');
      }

      const results = mockPokemon.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
      setPokemon(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Auto-search when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      searchPokemon(searchTerm);
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div
        className="bg-blue-50 p-6 rounded-lg"
        role="status"
        aria-label="Loading Pokemon search results"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-blue-200 rounded"></div>
            <div className="h-3 bg-blue-200 rounded w-5/6"></div>
          </div>
        </div>
        <span className="sr-only">Searching for Pokemon...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-50 p-6 rounded-lg border border-red-200"
        role="alert"
        aria-labelledby="error-title"
      >
        <div className="flex items-center">
          <span
            className="text-red-500 text-xl mr-2"
            aria-hidden="true"
          >
            ⚠️
          </span>
          <div>
            <h3 id="error-title" className="font-bold text-red-800">
              Search Error
            </h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-green-50 p-6 rounded-lg"
      role="region"
      aria-labelledby="results-title"
    >
      <h3 id="results-title" className="font-bold mb-4">
        Found {pokemon.length} Pokemon
      </h3>
      <ul className="grid gap-3" role="list">
        {pokemon.map((p) => (
          <li
            key={p.id}
            className="bg-white p-3 rounded flex justify-between"
            role="listitem"
          >
            <div>
              <span className="font-bold">{p.name}</span>
              <span className="text-gray-600 ml-2">({p.type})</span>
            </div>
            <span className="text-sm">HP: {p.hp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Exercise = () => {
  const [searchTerm, setSearchTerm] = useState('pika');

  return (
    <div className="space-y-4">
      <label
        htmlFor="pokemon-search"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Search Pokemon
      </label>
      <input
        id="pokemon-search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokemon..."
        className="w-full p-2 border rounded"
        aria-describedby="search-instructions"
      />
      <div id="search-instructions" className="sr-only">
        Type to search for Pokemon by name
      </div>

      <div aria-live="polite" aria-label="Search results">
        <PokemonSearch searchTerm={searchTerm} />
      </div>
    </div>
  );
};
