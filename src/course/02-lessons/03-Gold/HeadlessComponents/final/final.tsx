import { useState } from 'react';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
  caught: boolean;
}

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

// Headless component - logic only, no UI
const usePokemonInventory = () => {
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

  return {
    // State
    pokemon: sortedPokemon,
    totalCount: pokemon.length,
    filter,
    sortBy,

    // Actions
    setFilter,
    setSortBy,
    toggleCaught
  };
};

// Card View UI Component
const CardView = () => {
  const {
    pokemon,
    totalCount,
    filter,
    sortBy,
    setFilter,
    setSortBy,
    toggleCaught
  } = usePokemonInventory();

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Pokemon Cards</h2>

      <div className="flex gap-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Pokemon</option>
          <option value="caught">Caught</option>
          <option value="wild">Wild</option>
        </select>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemon.map((p) => (
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
        Showing {pokemon.length} of {totalCount} Pokemon
      </div>
    </div>
  );
};

// List View UI Component
const ListView = () => {
  const {
    pokemon,
    totalCount,
    filter,
    sortBy,
    setFilter,
    setSortBy,
    toggleCaught
  } = usePokemonInventory();

  return (
    <div className="bg-green-50 p-6 rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Pokemon List</h2>

      <div className="flex gap-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Pokemon</option>
          <option value="caught">Caught</option>
          <option value="wild">Wild</option>
        </select>

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

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Level</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2 font-medium">{p.name}</td>
                <td className="px-4 py-2">{p.type}</td>
                <td className="px-4 py-2">{p.level}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      p.caught
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {p.caught ? 'Caught' : 'Wild'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleCaught(p.id)}
                    className={`py-1 px-3 rounded text-sm ${
                      p.caught
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {p.caught ? 'Release' : 'Catch'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Showing {pokemon.length} of {totalCount} Pokemon
      </div>
    </div>
  );
};

export const Final = () => {
  return (
    <div className="space-y-8">
      <CardView />
      <ListView />
    </div>
  );
};
