// No imports needed for this exercise

interface IPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
}

/*
  * Observations
  * 💅 Type-based styling logic is repeated inline
  * Hard to reuse styling across different components
  * Mixing presentation logic with component logic

  * Tasks
  * 1A 💻 - Create withPokemonType HOC that adds type-based styling
  * 1B 💻 - Apply HOC to PokemonCard component
  * 1C 💻 - Use enhanced component to display Pokemon with type styling
  * 1D 💻 - Test that different Pokemon types get different styling
*/

// Sample Pokemon data
const samplePokemon: IPokemon[] = [
  { id: 1, name: 'Pikachu', type: 'Electric', level: 25 },
  { id: 4, name: 'Charmander', type: 'Fire', level: 12 },
  { id: 7, name: 'Squirtle', type: 'Water', level: 18 }
];

// Basic Pokemon Card Component
const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => (
  <div className="p-4 bg-white rounded-lg border">
    <h3 className="text-xl font-bold">{pokemon.name}</h3>
    <p className="text-gray-600">Type: {pokemon.type}</p>
    <p className="text-gray-600">Level: {pokemon.level}</p>
  </div>
);

// Component that shows Pokemon with inline type styling (needs refactoring)
const PokemonShowcase = () => {
  // Inline type styling (should be extracted to HOC)
  const getTypeStyles = (type: string) => {
    const styles = {
      Electric: 'bg-yellow-100 border-yellow-300',
      Fire: 'bg-red-100 border-red-300',
      Water: 'bg-blue-100 border-blue-300'
    };
    return (
      styles[type as keyof typeof styles] ||
      'bg-gray-100 border-gray-300'
    );
  };

  return (
    <div className="space-y-6">
      {samplePokemon.map((pokemon) => (
        <div
          key={pokemon.id}
          className={`p-4 border-2 rounded-lg ${getTypeStyles(pokemon.type)}`}
        >
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export const Exercise = () => {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold">
        Pokemon Cards (Before HOC)
      </h1>
      <PokemonShowcase />
    </div>
  );
};
