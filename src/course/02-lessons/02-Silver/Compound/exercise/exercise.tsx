import { useState } from 'react';
import {
  PokemonTeamBuilder,
  TeamSlot
} from './components/PokemonTeamBuilder';

/**
 * Exercise: Convert the current Pokemon team builder implementation to use the compound pattern
 *
 * 🤔 Observations of this file
 * As you can see in this component we have some useState which is managing which team slot is selected at any given time. We need to move this logic into the PokemonTeamBuilder component and pass down the props into the TeamSlot that way instead of managing it here in this file.
 *
 */

// 💻 1A Copy the useState on line 16 and go to ./components/PokemonTeamBuilder.tsx
export const Exercise = () => {
  // 💣 2A Remove the useState and the isSelected, slotId, onClick, onSelect props from all the TeamSlots

  const [selectedSlot, setSelectedSlot] = useState<string>();

  // 💻 2B Import PokemonTeam from ./components/PokemonTeamBuilder.tsx
  // Change PokemonTeamBuilder to PokemonTeam and change TeamSlot to PokemonTeam.Slot

  return (
    <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
      <PokemonTeamBuilder title="My Pokemon Team">
        <TeamSlot
          position={1}
          pokemonName="Pikachu"
          pokemonLevel={25}
          pokemonType="Electric"
          isSelected={selectedSlot === 'slot-1'}
          slotId="slot-1"
          onClick={() => setSelectedSlot('slot-1')}
          onSelect={() => setSelectedSlot('slot-1')}
        />
        <TeamSlot
          position={2}
          pokemonName="Charizard"
          pokemonLevel={30}
          pokemonType="Fire/Flying"
          isSelected={selectedSlot === 'slot-2'}
          slotId="slot-2"
          onClick={() => setSelectedSlot('slot-2')}
          onSelect={() => setSelectedSlot('slot-2')}
        />
        <TeamSlot
          position={3}
          pokemonName="Blastoise"
          pokemonLevel={28}
          pokemonType="Water"
          isSelected={selectedSlot === 'slot-3'}
          slotId="slot-3"
          onClick={() => setSelectedSlot('slot-3')}
          onSelect={() => setSelectedSlot('slot-3')}
        />
        <TeamSlot
          position={4}
          pokemonName="Venusaur"
          pokemonLevel={27}
          pokemonType="Grass/Poison"
          isSelected={selectedSlot === 'slot-4'}
          slotId="slot-4"
          onClick={() => setSelectedSlot('slot-4')}
          onSelect={() => setSelectedSlot('slot-4')}
        />
        <TeamSlot
          position={5}
          isSelected={selectedSlot === 'slot-5'}
          slotId="slot-5"
          onClick={() => setSelectedSlot('slot-5')}
          onSelect={() => setSelectedSlot('slot-5')}
        />
        <TeamSlot
          position={6}
          isSelected={selectedSlot === 'slot-6'}
          slotId="slot-6"
          onClick={() => setSelectedSlot('slot-6')}
          onSelect={() => setSelectedSlot('slot-6')}
        />
      </PokemonTeamBuilder>
    </div>
  );
};
