import { ReactNode, useState, useEffect } from 'react';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  hp: number;
}

interface IPokemonSearchProps {
  searchTerm: string;
  renderLoading: () => ReactNode | ReactNode[];
  renderSuccess: (pokemon: IPokemon[]) => ReactNode | ReactNode[];
  renderError: (error: string) => ReactNode | ReactNode[];
}

const mockPokemon: IPokemon[] = [
  { id: 1, name: 'Pikachu', type: 'Electric', hp: 35 },
  { id: 4, name: 'Charmander', type: 'Fire', hp: 39 },
  { id: 7, name: 'Squirtle', type: 'Water', hp: 44 },
  { id: 25, name: 'Pichu', type: 'Electric', hp: 20 }
];

export const PokemonSearch = ({
  searchTerm,
  renderLoading,
  renderSuccess,
  renderError
}: IPokemonSearchProps) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    if (searchTerm) {
      searchPokemon(searchTerm);
    }
  }, [searchTerm]);

  if (loading) return renderLoading();
  if (error) return renderError(error);
  return renderSuccess(pokemon);
};

export const Final = () => {
  const [searchTerm, setSearchTerm] = useState('pika');

  return (
    <div className="space-y-6">
      <label
        htmlFor="pokemon-search-final"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Search Pokemon
      </label>
      <input
        id="pokemon-search-final"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokemon..."
        className="w-full p-2 border rounded"
        aria-describedby="search-instructions-final"
      />
      <div id="search-instructions-final" className="sr-only">
        Type to search for Pokemon by name
      </div>

      {/* Card Display */}
      <PokemonSearch
        searchTerm={searchTerm}
        renderLoading={() => (
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
        )}
        renderError={(error) => (
          <div
            className="bg-red-50 p-6 rounded-lg border border-red-200"
            role="alert"
            aria-labelledby="error-title-1"
          >
            <div className="flex items-center">
              <span
                className="text-red-500 text-xl mr-2"
                aria-hidden="true"
              >
                ⚠️
              </span>
              <div>
                <h3
                  id="error-title-1"
                  className="font-bold text-red-800"
                >
                  Search Error
                </h3>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}
        renderSuccess={(pokemon) => (
          <div
            className="bg-green-50 p-6 rounded-lg"
            role="region"
            aria-labelledby="results-title-1"
          >
            <h3 id="results-title-1" className="font-bold mb-4">
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
                    <span className="text-gray-600 ml-2">
                      ({p.type})
                    </span>
                  </div>
                  <span className="text-sm">HP: {p.hp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      />

      {/* List Display */}
      <PokemonSearch
        searchTerm={searchTerm}
        renderLoading={() => (
          <div
            className="text-center py-4"
            role="status"
            aria-label="Loading Pokemon search results"
          >
            <span className="text-gray-500" aria-hidden="true">
              🔍
            </span>
            <span className="text-gray-500 ml-1">Searching...</span>
          </div>
        )}
        renderError={(error) => (
          <div className="text-red-500 text-center py-4" role="alert">
            <span aria-hidden="true">❌</span>
            <span className="ml-1">{error}</span>
          </div>
        )}
        renderSuccess={(pokemon) => (
          <div
            className="bg-gray-50 p-4 rounded"
            role="region"
            aria-label={`Found ${pokemon.length} Pokemon in list format`}
          >
            <ul className="space-y-1" role="list">
              {pokemon.map((p) => (
                <li
                  key={p.id}
                  className="flex justify-between"
                  role="listitem"
                >
                  <span>
                    {p.name} ({p.type})
                  </span>
                  <span>HP: {p.hp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
};
