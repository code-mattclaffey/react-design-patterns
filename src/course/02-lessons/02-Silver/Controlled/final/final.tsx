import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Button } from '@shared/components/Button/Button.component';

interface IEvolutionModal {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  id: string;
  pokemon: {
    name: string;
    level: number;
    currentSprite: string;
  };
  evolution: {
    name: string;
    sprite: string;
    requirement: string;
  };
}

const EvolutionModal = ({
  isVisible,
  onClose,
  onConfirm,
  id,
  pokemon,
  evolution
}: IEvolutionModal) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && modal.current) {
      modal.current.focus();
    }
  }, [isVisible]);

  const onModalPress = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div
      className={classNames(
        'bg-modal-bg fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-10',
        { flex: isVisible, hidden: !isVisible }
      )}
      role="button"
      onClick={onClose}
      tabIndex={0}
    >
      <div
        role="dialog"
        id={id}
        aria-labelledby={`evolution_title_${id}`}
        aria-describedby={`evolution_body_${id}`}
        aria-modal="true"
        hidden={!isVisible}
        tabIndex={0}
        ref={modal}
        className="bg-white rounded-2xl p-6 relative z-20 max-w-md mx-4"
        onClick={onModalPress}
      >
        <FocusLock returnFocus={true}>
          <div>
            <h2
              id={`evolution_title_${id}`}
              className="text-2xl font-bold text-center mb-4 text-blue-800"
            >
              ✨ Evolution Time! ✨
            </h2>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <img
                    src={pokemon.currentSprite}
                    alt={pokemon.name}
                    className="w-20 h-20 mx-auto"
                  />
                  <p className="font-bold">{pokemon.name}</p>
                  <p className="text-sm text-gray-600">
                    Level {pokemon.level}
                  </p>
                </div>

                <div className="text-4xl">→</div>

                <div className="text-center">
                  <img
                    src={evolution.sprite}
                    alt={evolution.name}
                    className="w-20 h-20 mx-auto"
                  />
                  <p className="font-bold">{evolution.name}</p>
                  <p className="text-xs text-blue-600">
                    {evolution.requirement}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={onConfirm}
                className="bg-green-600 hover:bg-green-700"
              >
                ✨ Evolve!
              </Button>
              <Button
                onClick={onClose}
                className="bg-gray-600 hover:bg-gray-700"
              >
                Cancel
              </Button>
            </div>
          </div>
          <div
            id={`evolution_body_${id}`}
            className="mt-4 text-center text-sm text-gray-600"
          >
            Your {pokemon.name} is ready to evolve into{' '}
            {evolution.name}!
          </div>
        </FocusLock>
      </div>
    </div>
  );
};

export const Final = () => {
  const [isEvolutionVisible, setIsEvolutionVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({
    name: 'Charmander',
    level: 16,
    currentSprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  });

  const evolution = {
    name: 'Charmeleon',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    requirement: 'Level 16 reached!'
  };

  const onClose = () => {
    setIsEvolutionVisible(false);
  };

  const onConfirm = () => {
    setCurrentPokemon({
      name: evolution.name,
      level: currentPokemon.level,
      currentSprite: evolution.sprite
    });
    setIsEvolutionVisible(false);
  };

  const onCheckEvolution = () => {
    if (
      currentPokemon.level >= 16 &&
      currentPokemon.name === 'Charmander'
    ) {
      setIsEvolutionVisible(true);
    }
  };

  return (
    <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        🎮 Pokemon Evolution System
      </h2>

      <div className="text-center mb-6">
        <img
          src={currentPokemon.currentSprite}
          alt={currentPokemon.name}
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-xl font-bold">{currentPokemon.name}</h3>
        <p className="text-gray-600">Level {currentPokemon.level}</p>
        {currentPokemon.name === 'Charmander' &&
          currentPokemon.level >= 16 && (
            <p className="text-green-600 font-semibold mt-2">
              Ready to evolve! 🌟
            </p>
          )}
      </div>

      <div className="text-center">
        <Button
          onClick={onCheckEvolution}
          className="bg-yellow-500 hover:bg-yellow-600"
          disabled={
            currentPokemon.name !== 'Charmander' ||
            currentPokemon.level < 16
          }
        >
          ⚡ Check Evolution
        </Button>
      </div>

      {isEvolutionVisible && (
        <EvolutionModal
          id="evolution-modal"
          isVisible={isEvolutionVisible}
          onClose={onClose}
          onConfirm={onConfirm}
          pokemon={currentPokemon}
          evolution={evolution}
        />
      )}
    </div>
  );
};
