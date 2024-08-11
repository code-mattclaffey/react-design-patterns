// 👨🏻‍💻 1A import IPokemonManagerState, PokemonManager from './PokemonManager

// 👨🏻‍💻 1B Setup an interface called IPokemonManagerActions
// It will contain just fetchPokemons: (total: number) => Promise<void>; in the interface

// 👨🏻‍💻 1C Creating the HOC
// 👨🏻‍💻 1C.a export const withPokemons.
// ✍🏻 In typescript you can use something called generics which helps you set specific types
// For specific scenarios. In our scenario, we want to have two Generic types where we specify
// What data we need from state and what actions we need from state. This will make more sense
// When we set it up in the exercise file. Example:
// export const Func = <T>(
//  prop: T
// ) => {}
// Func<string>();
// 👨🏻‍💻 1C.b We need our props to look like this
// export const withPokemons = <TMapperResponse, TActionResponse>(
//   mapper: (state: IPokemonManagerState) => TMapperResponse,
//   actions: (actions: IPokemonManagerActions) => TActionResponse
// ) => {}

// 👨🏻‍💻1D - Returning the return
// So the whole point of the HOC is to pass a Component into the first or second called For example:
// withHOC(Component) or withHOC(funcA)(Component);
// 👨🏻‍💻1D.a We need to Return a function which looks like this:
// (Component: React.FC<any>) => {}
// 👨🏻‍💻1D.b And then we want to return another function
// (props: any) - we could type this better but typescript isn't the core of this lesson.

// 👨🏻‍💻1E - Managing state from a class
//  We need to:
// 👨🏻‍💻1E.a - Create a useState with the initial value of new PokemonManager().getState()
// 👨🏻‍💻1E.b - Create a variable with useMemo(() => new PokemonManager(), []);
// ✍🏻 This is so we can prevent it from calling itself everytime the component re-rendered.
// 👨🏻‍💻1E.c - return the component with the following:
// return (
//   <Component
//     {...props}
//     {...mapper(pokemonManagerState)}
//     {...actions({
//       fetchPokemons: async (total: number) => {
//         await pokemonManager.fetchPokemons(total);
//         setPokemonManagerState(pokemonManager.getState());
//       }
//     })}
//   />
// );

// 🎉 Finished with this page.
// Take a step back and reflect what you have just done because this was more than just a HOC.
// What you did was:
/**
 * 🎉 You made a complicated higher order component which did a double return based on the props it took.
 * 🎉 We pretty much wrote the high level thinking of the old way of doing redux connect
 * 🎉 You delve into TypeScript Generics and made this HOC more flexible.
 * 🎉 You used static logic within an ES6 class and used react purely for state management.
 */

// 👨🏻‍💻 Let's get this wired up into the presentational layer. Head over to exercise.tsx.
