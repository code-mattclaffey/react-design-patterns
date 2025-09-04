import { PokemonTeam } from './components/PokemonTeamBuilder';

export const Final = () => (
  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
    <PokemonTeam title="My Pokemon Team">
      <PokemonTeam.Slot
        position={1}
        pokemonName="Pikachu"
        pokemonLevel={25}
        pokemonType="Electric"
        onClick={() => {
          console.log('TRACK SLOT 1');
        }}
      />
      <PokemonTeam.Slot
        position={2}
        pokemonName="Charizard"
        pokemonLevel={30}
        pokemonType="Fire/Flying"
      />
      <PokemonTeam.Slot
        position={3}
        pokemonName="Blastoise"
        pokemonLevel={28}
        pokemonType="Water"
      />
      <PokemonTeam.Slot
        position={4}
        pokemonName="Venusaur"
        pokemonLevel={27}
        pokemonType="Grass/Poison"
      />
      <PokemonTeam.Slot position={5} />
      <PokemonTeam.Slot position={6} />
    </PokemonTeam>
  </div>
);
