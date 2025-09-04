import { ComponentType } from 'react';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
}

// Sample Pokemon data
const samplePokemon: IPokemon[] = [
  { id: 1, name: 'Pikachu', type: 'Electric', level: 25 },
  { id: 4, name: 'Charmander', type: 'Fire', level: 12 },
  { id: 7, name: 'Squirtle', type: 'Water', level: 18 }
];

// HOC: Add Pokemon type-based styling
const withPokemonType = <P extends object>(
  Component: ComponentType<P>
) => {
  return (props: P & { type?: string }) => {
    const getTypeStyles = (type?: string) => {
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
      <div
        className={`p-4 border-2 rounded-lg ${getTypeStyles(props.type)}`}
      >
        <Component {...props} />
      </div>
    );
  };
};

// Basic Pokemon Card Component
const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => (
  <div className="p-4 bg-white rounded-lg border">
    <h3 className="text-xl font-bold">{pokemon.name}</h3>
    <p className="text-gray-600">Type: {pokemon.type}</p>
    <p className="text-gray-600">Level: {pokemon.level}</p>
  </div>
);

// Enhanced component using HOC
const StyledPokemonCard = withPokemonType(PokemonCard);

export const Final = () => {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Pokemon Cards with HOC</h1>

      <div className="space-y-6">
        {samplePokemon.map((pokemon) => (
          <StyledPokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            type={pokemon.type}
          />
        ))}
      </div>
    </div>
  );
};
