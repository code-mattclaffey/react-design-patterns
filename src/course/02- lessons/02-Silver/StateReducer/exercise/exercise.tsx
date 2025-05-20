/**
 * Exercise: Implement a Reducer
 *
 * What will we be doing?
 * In this exercise we will be implementing a state reducer pattern in the exercise component which will fetch the pokemon cards and then show different states based on if there is an error or loading.
 *
 */

// 👨🏻‍💻 1A - Setting up our types
// 👨🏻‍💻 1A.a - Create an interface called IPokemonReducerState
// It needs pokemons?: IPokemon[]; isLoading: boolean; hasError: boolean;

// 👨🏻‍💻 1A.b - Create an enum called ActionNames and give it the following:
// LOADING_POKEMONS = 'LOADING_POKEMONS',
// RECEIVED_POKEMONS = 'RECEIVED_POKEMONS',
// ERROR_POKEMONS = 'ERROR_POKEMONS'

// 👨🏻‍💻 1A.c - Create an interface called IActionType
// it has a payload?: IPokemon[]; and a type: ActionNames;

// SKIP ME FOR NOW
// 👨🏻‍💻 1E - Implementing the fetch function
// Using this pattern allows us to move functions outside of the react component which makes
// Them a lot more testable in isolation.
// 👨🏻‍💻 1E.a - const fetchPokemons = async (dispatch: Dispatch<IActionType>) => {}
// 👨🏻‍💻 1E.b - I want you to create a new PokemonManager();
// 👨🏻‍💻 1E.c - Dispatch the dispatch function and pass type:  ActionNames.LOADING_POKEMONS
// This will go to our reducer and update the state which reflects in the UI.
// 👨🏻‍💻 1E.d - Add a try catch block and await for the pokemoneManger.fetchPokemons(12);
// 👨🏻‍💻 1E.e - When you call that get the current state const pokemoneState = pokemonManager.getState();
// 👨🏻‍💻 1E.f - dispatch with type ActionNames.RECEIVED_POKEMONS, and payload pokemoneState.pokemons
// 👨🏻‍💻 1E.g - in your catch console.error(e) and dispatch with type type: ActionNames.ERROR_POKEMONS
// return to the component below once done.

// 👨🏻‍💻 1B - Create the Pokemon reducer called pokemonReducer
// 👨🏻‍💻 1B.a - it takes two parameters, state: IPokemonReducerState, action: IActionType
// ✍🏻 This will always be in this order when you use useReducer
// 👨🏻‍💻 1B.b - Create a switch which has the action.type = switch (action.type)
// the default will return the state.

// 👨🏻‍💻 1C - Setting up our action listeners
// 👨🏻‍💻 1C.a add a case for ActionNames.LOADING_POKEMONS and return
// { ...state, isLoading: true, pokemons: [], hasError: false }
// 👨🏻‍💻 1C.b add a case for ActionNames.RECEIVED_POKEMONS and return
// { ...state, isLoading: false, pokemons: action.payload ?? [] }
// 👨🏻‍💻 1C.c add a case for ActionNames.ERROR_POKEMONS and return
// { ...state, isLoading: false, hasError: true, pokemons: [] }

// 👨🏻‍💻 1D - Setting up the Component
// 👨🏻‍💻 1D.a - add the following
// const [{ pokemons, isLoading, hasError }, dispatch] = useReducer(
//   pokemonReducer,
//   {
//     pokemons: [],
//     isLoading: false,
//     hasError: false
//   }
// );
// a userReducer will always need an initial state (second param) so it can handle the initial mount.
// 👨🏻‍💻 1D.b - Add a useEffect and call a fetchPokemons function and pass the dispatch in there. Navigate to 1E (further up)
export const Exercise = () => {
  // 💄 1F - Uncomment the UI code.

  // if (hasError) {
  //   return (
  //     <div
  //       className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
  //       role="alert"
  //     >
  //       <strong className="font-bold">Holy smokes!</strong> <br />
  //       <span className="block sm:inline">
  //         Something seriously bad happened.
  //       </span>
  //     </div>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <section>
  //       <div className="animate-pulse bg-slate-300 rounded-lg h-12 w-96 mb-4" />
  //       <div className="grid grid-cols-6 gap-6">
  //         {[...new Array(12)].map((_, index) => (
  //           <div
  //             key={index}
  //             className="animate-pulse bg-slate-300 rounded-lg p-4 h-60"
  //           />
  //         ))}
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Pokemon Cards</h2>
      <div className="grid grid-cols-6 gap-6">
        {/* {pokemons &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                loading="lazy"
              />
            </div>
          ))} */}
      </div>
    </section>
  );
};
