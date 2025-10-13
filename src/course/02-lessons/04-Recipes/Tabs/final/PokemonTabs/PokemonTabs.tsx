import { Tabs } from '../Tabs';

const pokemonTypes = {
  fire: {
    name: 'Fire',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    pokemon: ['Charizard', 'Arcanine', 'Rapidash', 'Flareon']
  },
  water: {
    name: 'Water',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    pokemon: ['Blastoise', 'Gyarados', 'Vaporeon', 'Lapras']
  },
  grass: {
    name: 'Grass',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    pokemon: ['Venusaur', 'Exeggutor', 'Vileplume', 'Leafeon']
  }
};

export const PokemonTabs = () => {
  return (
    <Tabs
      label="Pokemon Types"
      initialActiveTabIndex={0}
      className="w-full max-w-4xl mx-auto p-6"
      id="pokemon-tabs"
    >
      <Tabs.List className="flex space-x-1 border-b border-gray-200">
        <Tabs.Button
          className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
          activeClassName="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-blue-500 text-white"
        >
          🔥 Fire
        </Tabs.Button>
        <Tabs.Button
          className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
          activeClassName="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-blue-500 text-white"
        >
          💧 Water
        </Tabs.Button>
        <Tabs.Button
          className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
          activeClassName="px-6 py-3 font-semibold rounded-lg transition-all duration-200 bg-blue-500 text-white"
        >
          🌿 Grass
        </Tabs.Button>
      </Tabs.List>
      <Tabs.PanelContainer>
        <Tabs.Panel className="p-6 bg-white rounded-b-lg border border-gray-200 border-t-0">
          <div
            className={`${pokemonTypes.fire.bgColor} p-4 rounded-lg`}
          >
            <h3
              className={`text-2xl font-bold ${pokemonTypes.fire.color} mb-4`}
            >
              🔥 Fire Type Pokemon
            </h3>
            <p className="text-gray-700 mb-4">
              Fire-type Pokémon are known for their fierce attacks and
              high offensive capabilities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pokemonTypes.fire.pokemon.map((pokemon) => (
                <div
                  key={pokemon}
                  className="bg-white p-3 rounded-lg shadow-sm border"
                >
                  <span className="font-semibold">{pokemon}</span>
                </div>
              ))}
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="p-6 bg-white rounded-b-lg border border-gray-200 border-t-0">
          <div
            className={`${pokemonTypes.water.bgColor} p-4 rounded-lg`}
          >
            <h3
              className={`text-2xl font-bold ${pokemonTypes.water.color} mb-4`}
            >
              💧 Water Type Pokemon
            </h3>
            <p className="text-gray-700 mb-4">
              Water-type Pokémon are versatile and often have strong
              defensive capabilities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pokemonTypes.water.pokemon.map((pokemon) => (
                <div
                  key={pokemon}
                  className="bg-white p-3 rounded-lg shadow-sm border"
                >
                  <span className="font-semibold">{pokemon}</span>
                </div>
              ))}
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="p-6 bg-white rounded-b-lg border border-gray-200 border-t-0">
          <div
            className={`${pokemonTypes.grass.bgColor} p-4 rounded-lg`}
          >
            <h3
              className={`text-2xl font-bold ${pokemonTypes.grass.color} mb-4`}
            >
              🌿 Grass Type Pokemon
            </h3>
            <p className="text-gray-700 mb-4">
              Grass-type Pokémon excel at status effects and often
              have healing abilities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pokemonTypes.grass.pokemon.map((pokemon) => (
                <div
                  key={pokemon}
                  className="bg-white p-3 rounded-lg shadow-sm border"
                >
                  <span className="font-semibold">{pokemon}</span>
                </div>
              ))}
            </div>
          </div>
        </Tabs.Panel>
      </Tabs.PanelContainer>
    </Tabs>
  );
};
