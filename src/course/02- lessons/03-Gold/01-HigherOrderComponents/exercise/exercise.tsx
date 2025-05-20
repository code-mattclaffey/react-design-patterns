// 👨🏻‍💻 2A Import IPokemon, IPokemonManagerActions, IPokemonManageState, withPokemon from './store';

/**
 * Exercise: Implement a Higher Order Component
 *
 * What will we be doing?
 * We will be creating a Higher order component which will pass pokemon data
 * Using the same pattern that Redux used to do with their connect function
 *
 * Navigate your way to withPokemon to start.
 */

// 👨🏻‍💻 2B - Interfaces
// 👨🏻‍💻 2B.a Setup an interface called IMapStateToPropsComponentOneResponse.
// This will just have pokemons: IPokemon[]; in the interface.

// 👨🏻‍💻 2B.b Setup an interface called IActionsComponentOneResponse.
// This will just have fetchPokemons: (total: number) => Promise<void>; in the interface.

// 👨🏻‍💻 2B.c Setup an interface called IComponentOneProps which extends IMapStateToPropsComponentOneResponse & IActionsComponentOneResponse.
// This will just have title: string; in the interface.

// 👨🏻‍💻 2C - Setting up the mapStateToProps & mapActionsToProps
// 👨🏻‍💻 2C.a Setup a function called mapStateToProps which has a parameter state: IPokemonManagerState
// it should return the IMapStateToPropsComponentOneResponse interface

// 👨🏻‍💻 2C.b Setup a function called mapActionsToProps which has a parameter actions: IPokemonManagerActions
// it should return the IActionsComponentOneResponse interface

// 👨🏻‍💻 2D - Creating the component
// 👨🏻‍💻 2D.a Create a Component and it should have this params { pokemons, title, fetchPokemons }: IComponentProps
// 👨🏻‍💻 2D.b Make a useEffect with no dependencies and fetchPokemons - go wild with the total... why not.
// 👨🏻‍💻💄 2D.c Return this markup
{
  /* <section>
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
</section> */
}

// 👨🏻‍💻 2E - Applying the HOC
// I want you to call:
// const Exercise = withPokemons<
//   IMapStateToPropsComponentOneResponse, // We are defining a generic here
//   IActionsComponentOneResponse // We are defining a generic here
// >(
//   mapStateToProps,
//   mapActionsToProps
// )(Component);

export const Exercise = () => {
  return null;
};
