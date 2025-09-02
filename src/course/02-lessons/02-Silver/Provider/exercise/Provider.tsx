// 👨🏻‍💻 1A - Create an interface called IPokemonProviderState which extends IPokemonManagerState (import it in)

// 👨🏻‍💻 1B - Create an variable called PokemonContext
// Then we need to call createContext<IPokemonProviderState | null>(null)

// 👨🏻‍💻 1C - Create create a custom hook called usePokemonProvider, you need to export const it.
// It's really good to make a react hook so the naming convention is easier to pickup
// In your react application you can also add error handling in here to handle if consumers
// Are not using your context correctly.
// 👨🏻‍💻 1C.a - const context = useContext(PokemonContext);
// 👨🏻‍💻 1C.b - check if the context exists, if it doesn't throw a new Error with a messgae
// 👨🏻‍💻 1C.c - then if it does exist, return the context.

// 👨🏻‍💻 1D - The PokemonProvider
// Next we need to export a function called PokemonProvider which will handle any logic we need
// across the pages that use this and hide all the boilerplate code for creating a context provider.
// The pokemonProvider props will be { children }: { children: React.ReactNode | React.ReactNode[]; }
// 👨🏻‍💻 1D.a - Copy the pokemonManagerState logic, const pokemonManager and the fetchPokemons logic from
// solutions/07-HigherOrderComponents/withPokemon.tsx and paste it in the function.
// 👨🏻‍💻 1D.b - create a variable called state which is a useMemo(() => ({ fetchPokemons, ...pokemonManagerState }), [pokemonManagerState]);
// 👨🏻‍💻 1D.c - return with the <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>

// 🎉 Finished with this file.
// Take a step back and reflect what you have just done because this was more than just a React Context Provider.
// What you did was:
/**
 * 🎉 You made a custom provider hook which did error handling
 * 🎉 You implemented an abstraction for the Provider component which meant all pages had the same logic
 */

// Let's move back over to the exercise file.
