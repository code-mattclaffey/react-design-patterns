import { useState } from 'react';
import { BattleOverlay } from './components/modal';
import { Button } from '@shared/components/Button/Button.component';

export const Final = () => {
  const [isBattleActive, setIsBattleActive] = useState(false);
  const [battleResult, setBattleResult] = useState<'won' | 'fled' | null>(null);

  const onCloseBattle = () => {
    setIsBattleActive(false);
  };

  const onStartBattle = () => {
    setIsBattleActive(true);
    setBattleResult(null);
  };

  const onBattleAction = (action: 'attack' | 'run') => {
    if (action === 'attack') {
      setBattleResult('won');
    } else {
      setBattleResult('fled');
    }
    setTimeout(() => {
      setIsBattleActive(false);
      setBattleResult(null);
    }, 2000);
  };

  return (
    <section className="z-10 relative h-screen bg-green-100 p-6">
      <div className="z-[9998] absolute top-0 left-0 right-0 bottom-0 bg-black/10" />
      
      <div className="relative z-[9999]">
        <h1 className="text-2xl font-bold mb-4 text-green-800">🌿 Pokemon World</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-200 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">🌲</div>
            <p className="text-sm">Tall Grass</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-sm">Pokemon Center</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">🏪</div>
            <p className="text-sm">Poke Mart</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-green-300 mb-6">
          <h2 className="text-lg font-semibold mb-4">🎒 Trainer Actions</h2>
          <p className="text-md mb-4">
            You're walking through the tall grass. Wild Pokemon might appear!
          </p>
          
          <div className="text-center">
            <Button 
              onClick={onStartBattle}
              className="bg-red-500 hover:bg-red-600"
              disabled={isBattleActive}
            >
              🔍 Search for Pokemon
            </Button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">🎮 Game Status</h3>
          <p className="text-sm text-gray-600">
            {isBattleActive ? 'Battle in progress...' : 'Exploring the world'}
          </p>
          {battleResult && (
            <p className="text-sm font-semibold mt-2">
              {battleResult === 'won' ? '🎉 Victory!' : '💨 Pokemon fled!'}
            </p>
          )}
        </div>
      </div>

      {isBattleActive && (
        <BattleOverlay
          id="battle-overlay"
          onClose={onCloseBattle}
          isVisible={isBattleActive}
          wildPokemon={{
            name: 'Pidgey',
            level: 5,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png'
          }}
          onBattleAction={onBattleAction}
          battleResult={battleResult}
        />
      )}
    </section>
  );
};