/**
 * Exercise: 🧼 State Colocation vs 🪜 State Lifting
 *
 * 🤔 Observations of this file
 * So the lead developer wanted us to manage the state for the selected pokemon types & the selected pokemon at this level so those variables can be used here and within the children. Each variable will be an array of strings which represent the type or the id of the selected pokemon.
 *
 * We need to tackle this in stages...
 *
 * Stage one (follow 1.* steps) - Creating the form that returns the pokemon types and saving those selected types to the lifted state variable
 * Stage two (following 2.* steps) - Using those types, we will render the pokemon options component
 *
 */

export const Screen = () => {
  // 🧑🏻‍💻 1.a: Create a useState<string[]> variable called selectedPokemonTypes, setSelectedPokemonTypes. Default to be an empty array.

  // 🧑🏻‍💻 2.a: Create a useState<Record<string, string[]>> variable called selectedPokemon, setSelectedPokemon. Default to be an object {}.

  // 🧑🏻‍💻 1.h: Create a function called onPokemonTypesUpdate which will take a types: string[] param. Pass that into the Form component as a prop. The function will just need setSelectedPokemonTypes for now.
  // 🎉 STAGE ONE COMPLETED you should now be able to see the types display, select them and then the state in the screen gets updated.

  // 🧑🏻‍💻 2.m: You will now start to see the happy path all working fine, however when you change to different pokemon types and receive a new set of pokemon you now get some messy state where selectedPokemon is more than 8. To fix this, write the following code inside 1.h function (before the setSelectedPokemonTypes)
  /*
    const newlyUpdatedPokemon = { ...selectedPokemon };

    selectedPokemonTypes
      .filter((type) => {
        return !types.find((selectedType) => selectedType === type);
      })
      .forEach((type) => {
        delete newlyUpdatedPokemon[type];
      });

    setSelectedPokemon(newlyUpdatedPokemon);
  */
  // STAGE TWO completed. You have now built the screen. BUT 🐞 there is a bug where the PokemonOptions re-renders the types that did not need to update when you change your types after one try. The reason is the "key" prop using index. The api has no identifier per type. If you enjoyed this exercise have a look into fixing it and make a pr.

  // 🧑🏻‍💻 2.l: Create a function called onPokemonSelection which will take a pokemon: string[], type: string
  // Then create a newlySelectedPokemon variable which will be a copy of the current selectedPokemon {...selectedPokemon}
  // assign the newlySelectedPokemon[type] to equal the pokemon variable.
  // setSelectedPokemon(newlySelectedPokemon);

  return (
    <main className="h-screen p-6">
      <img
        src="/pokemon-battleground.webp"
        alt="hello"
        className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-0 h-full w-full object-cover"
      />
      <div className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-10 h-full w-full bg-black opacity-25" />
      <div className="relative z-20 max-w-[768px] mx-auto text-center">
        <div>
          <h1 className="text-center">
            <img
              src="/pokemon-logo.png"
              alt="Pokemon Battle Picker"
              className="inline-block w-96"
            />
            <span className="text-[76px] font-bold mb-4 block text-yellow-400 text-shadow-lg text-shadow-blue-600">
              Battle Picker
            </span>
          </h1>
        </div>
        <div>
          {/* 🧑🏻‍💻 1.b: Render pokemon types form from ./components/Form and then head over to the form component */}
        </div>
        <div>
          {/* 🧑🏻‍💻 2.b: Loop through the selectedPokemonTypes and pass down the type property to the PokemonOptions (./components/PokemonOptions) component. You will also need a key to be on the component. I used `${pokemonType}-${index}` */}
        </div>

        {/* 🧑🏻‍💻 2.c: We need to check if the KEYS in the selectedPokemon object equal 4 and the selectedPokemonTypes length is 4 before rendering the code snippet below. Head over to PokemonOptions when completed. */}
        {/*
          <button
              type="button"
              className="my-12 rounded-lg py-6 px-16 text-white text-2xl font-bold bg-blue-900 hover:bg-blue-950 focus-within:bg-blue-950"
              onClick={() => alert('Ready for battle!')}
            >
              Begin Battle
            </button>
        */}
      </div>
    </main>
  );
};
