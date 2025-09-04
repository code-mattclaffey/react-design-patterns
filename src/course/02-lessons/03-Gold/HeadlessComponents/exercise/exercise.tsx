import { useState } from 'react';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
  caught: boolean;
}

/*
  * Observations
  * 💅 Pokemon inventory logic is tightly coupled with card UI
  * Filtering, sorting, and state management mixed with presentation
  * Hard to reuse logic for different UI designs

  * Tasks
  * 1A 💻 - Extract inventory logic into usePokemonInventory hook
  * 1B 💻 - Return state and actions from the headless hook
  * 1C 💻 - Create CardView component that uses the headless logic
  * 1D 💻 - Create ListView component with same logic, different UI
  * 1E 💻 - Test both components work with shared functionality
*/

const mockPokemon: IPokemon[] = [
  {
    id: 1,
    name: 'Pikachu',
    type: 'Electric',
    level: 25,
    caught: true
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    level: 12,
    caught: false
  },
  { id: 7, name: 'Squirtle', type: 'Water', level: 18, caught: true },
  {
    id: 25,
    name: 'Pichu',
    type: 'Electric',
    level: 8,
    caught: false
  },
  {
    id: 150,
    name: 'Mewtwo',
    type: 'Psychic',
    level: 70,
    caught: true
  }
];

export const PokemonInventory = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>(mockPokemon);
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const toggleCaught = (id: number) => {
    setPokemon((prev) =>
      prev.map((p) => (p.id === id ? { ...p, caught: !p.caught } : p))
    );
  };

  const filteredPokemon = pokemon.filter((p) => {
    if (filter === 'caught') return p.caught;
    if (filter === 'wild') return !p.caught;
    return true;
  });

  const sortedPokemon = [...filteredPokemon].sort((a, b) => {
    if (sortBy === 'level') return b.level - a.level;
    if (sortBy === 'type') return a.type.localeCompare(b.type);
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Pokemon Inventory</h2>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Filter:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.currentTarget.value)}
            className="p-2 border rounded"
          >
            <option value="all">All Pokemon</option>
            <option value="caught">Caught</option>
            <option value="wild">Wild</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.currentTarget.value)}
            className="p-2 border rounded"
          >
            <option value="name">Name</option>
            <option value="level">Level</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>

      {/* Pokemon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPokemon.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  p.caught
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {p.caught ? 'Caught' : 'Wild'}
              </span>
            </div>

            <div className="text-sm text-gray-600 mb-3">
              <p>Type: {p.type}</p>
              <p>Level: {p.level}</p>
            </div>

            <button
              onClick={() => toggleCaught(p.id)}
              className={`w-full py-2 px-4 rounded text-sm font-medium ${
                p.caught
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {p.caught ? 'Release' : 'Catch'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Showing {sortedPokemon.length} of {pokemon.length} Pokemon
      </div>
    </div>
  );
};

export const Exercise = () => {
  return <PokemonInventory />;
};
