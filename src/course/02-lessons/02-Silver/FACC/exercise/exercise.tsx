import { useState } from 'react';

interface IPokemon {
  name: string;
  hp: number;
  maxHp: number;
  attack: number;
}

interface IBattleState {
  playerPokemon: IPokemon;
  enemyPokemon: IPokemon;
  turn: 'player' | 'enemy';
  battleLog: string[];
  winner: string | null;
}

/*
  * Observations
  * 💅 Battle logic is tightly coupled with specific battle display
  * The UI is hardcoded within the battle simulator

  * Tasks
  * 1A 💻  - Refactor to use FACC pattern by adding children prop:
  * children: (battleState: IBattleState, actions: IBattleActions) => React.ReactNode;
  *
  * 1B 💻  - Create IBattleActions interface with:
  * attack: () => void;
  * resetBattle: () => void;
  *
  * 1C 💻  - Replace the JSX return with children function call
  * 1D 💻  - In Exercise component, use FACC to render battle display
*/

export const PokemonBattleSimulator = () => {
  const [battleState, setBattleState] = useState<IBattleState>({
    playerPokemon: {
      name: 'Charizard',
      hp: 100,
      maxHp: 100,
      attack: 25
    },
    enemyPokemon: {
      name: 'Blastoise',
      hp: 100,
      maxHp: 100,
      attack: 20
    },
    turn: 'player',
    battleLog: [],
    winner: null
  });

  const attack = () => {
    if (battleState.winner) return;

    setBattleState((prev) => {
      const newState = { ...prev };

      if (prev.turn === 'player') {
        const damage = prev.playerPokemon.attack;
        newState.enemyPokemon.hp = Math.max(
          0,
          prev.enemyPokemon.hp - damage
        );
        newState.battleLog = [
          ...prev.battleLog,
          `${prev.playerPokemon.name} attacks for ${damage} damage!`
        ];

        if (newState.enemyPokemon.hp === 0) {
          newState.winner = prev.playerPokemon.name;
        } else {
          newState.turn = 'enemy';
        }
      } else {
        const damage = prev.enemyPokemon.attack;
        newState.playerPokemon.hp = Math.max(
          0,
          prev.playerPokemon.hp - damage
        );
        newState.battleLog = [
          ...prev.battleLog,
          `${prev.enemyPokemon.name} attacks for ${damage} damage!`
        ];

        if (newState.playerPokemon.hp === 0) {
          newState.winner = prev.enemyPokemon.name;
        } else {
          newState.turn = 'player';
        }
      }

      return newState;
    });
  };

  const resetBattle = () => {
    setBattleState({
      playerPokemon: {
        name: 'Charizard',
        hp: 100,
        maxHp: 100,
        attack: 25
      },
      enemyPokemon: {
        name: 'Blastoise',
        hp: 100,
        maxHp: 100,
        attack: 20
      },
      turn: 'player',
      battleLog: [],
      winner: null
    });
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Pokemon Battle</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-bold">
            {battleState.playerPokemon.name}
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{
                width: `${(battleState.playerPokemon.hp / battleState.playerPokemon.maxHp) * 100}%`
              }}
            />
          </div>
          <p>
            {battleState.playerPokemon.hp}/
            {battleState.playerPokemon.maxHp} HP
          </p>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <h3 className="font-bold">
            {battleState.enemyPokemon.name}
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{
                width: `${(battleState.enemyPokemon.hp / battleState.enemyPokemon.maxHp) * 100}%`
              }}
            />
          </div>
          <p>
            {battleState.enemyPokemon.hp}/
            {battleState.enemyPokemon.maxHp} HP
          </p>
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={attack}
          disabled={!!battleState.winner}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50"
        >
          Attack
        </button>
        <button
          onClick={resetBattle}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {battleState.winner && (
        <div className="bg-yellow-100 p-4 rounded mb-4">
          <h3 className="font-bold">{battleState.winner} wins!</h3>
        </div>
      )}

      <div className="bg-white p-4 rounded max-h-32 overflow-y-auto">
        {battleState.battleLog.map((log, index) => (
          <p key={index} className="text-sm">
            {log}
          </p>
        ))}
      </div>
    </div>
  );
};

export const Exercise = () => {
  return <PokemonBattleSimulator />;
};
