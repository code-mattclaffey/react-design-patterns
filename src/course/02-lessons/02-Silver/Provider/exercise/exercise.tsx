// 👨🏻‍💻 2A Import usePokemonProvider, PokemonProvider from './store';

/**
 * Exercise: Implement a Provider Component
 *
 * What will we be doing?
 * We will be creating a Provider Component component which will supply pokemon data in a global state
 * Which will be consumed by our component.
 *
 * Navigate your way to ./Provider.tsx to start.
 */

const Component = ({ title }: { title: string }) => {
  // 👨🏻‍💻 2B - get the pokemons and fetchPokemons from the usePokemonProvider.
  // 👨🏻‍💻 2C - call fetchPokemons in a useEffect.

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-6 gap-6">
        {/* 👨🏻‍💻 2D - Copy the pokemon loop code from 02-solutions/07-HigherOrderComponents/final.tsx line 48-56 */}
      </div>
    </section>
  );
};

export const Exercise = () => (
  // 👨🏻‍💻 2D Wrap the Component in the PokemonProvider
  <Component title="Pokemon Cards" />
);
