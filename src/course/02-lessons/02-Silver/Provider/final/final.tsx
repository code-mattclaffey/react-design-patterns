import { useEffect } from 'react';
import { PokemonProvider, usePokemonProvider } from './Provider';

const Component = ({ title }: { title: string }) => {
  const { fetchPokemons, pokemons } = usePokemonProvider();

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

export const Final = () => (
  <PokemonProvider>
    <Component title="Pokemon Cards" />
  </PokemonProvider>
);
