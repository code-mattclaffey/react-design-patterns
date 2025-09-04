import classNames from 'classnames';
import { useEffect, useRef } from 'react';
// 💻 1B - import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { Button } from '@shared/components/Button/Button.component';

interface IBattleOverlay {
  isVisible: boolean;
  onClose: () => void;
  id: string;
  wildPokemon: {
    name: string;
    level: number;
    sprite: string;
  };
  onBattleAction: (action: 'attack' | 'run') => void;
  battleResult: 'won' | 'fled' | null;
}

export const BattleOverlay = ({
  isVisible,
  onClose,
  id,
  wildPokemon,
  onBattleAction,
  battleResult
}: IBattleOverlay) => {
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

  // 💻 1C - call createPortal(battleOverlayCode, document.body);
  // 🧪 Test the storybook and look at how you can all of a sudden click the battle buttons
  // This isn't saying the solution to override z-index is to use portal but more of the sense that if you need something
  // put at the root of the DOM but do not wish to implement something extremely complex or app level then portal is handy for this.
  return (
    <div
      className={classNames(
        'bg-black/80 fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-20',
        { flex: isVisible, hidden: !isVisible }
      )}
      role="button"
      onClick={onClose}
      tabIndex={0}
    >
      <div
        role="dialog"
        id={id}
        aria-labelledby={`battle_title_${id}`}
        aria-describedby={`battle_body_${id}`}
        aria-modal="true"
        hidden={!isVisible}
        tabIndex={0}
        ref={modal}
        className="bg-gradient-to-b from-blue-400 to-green-400 rounded-2xl p-6 relative z-20 max-w-lg mx-4 border-4 border-yellow-400"
        onClick={onModalPress}
      >
        <FocusLock>
          <div>
            <h2
              id={`battle_title_${id}`}
              className="text-2xl font-bold text-center mb-4 text-white"
            >
              ⚔️ Wild Pokemon Battle!
            </h2>

            {!battleResult ? (
              <div className="text-center">
                <div className="bg-white/90 rounded-lg p-4 mb-6">
                  <img
                    src={wildPokemon.sprite}
                    alt={wildPokemon.name}
                    className="w-24 h-24 mx-auto mb-2"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    A wild {wildPokemon.name} appeared!
                  </h3>
                  <p className="text-gray-600">
                    Level {wildPokemon.level}
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => onBattleAction('attack')}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    ⚔️ Attack
                  </Button>
                  <Button
                    onClick={() => onBattleAction('run')}
                    className="bg-gray-600 hover:bg-gray-700"
                  >
                    🏃 Run Away
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-white/90 rounded-lg p-6">
                  {battleResult === 'won' ? (
                    <>
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">
                        Victory!
                      </h3>
                      <p className="text-gray-600">
                        You defeated the wild {wildPokemon.name}!
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-6xl mb-4">💨</div>
                      <h3 className="text-xl font-bold text-blue-600 mb-2">
                        Escaped!
                      </h3>
                      <p className="text-gray-600">
                        The wild {wildPokemon.name} got away!
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            id={`battle_body_${id}`}
            className="mt-4 text-center text-sm text-white/80"
          >
            {!battleResult &&
              `What will you do against the wild ${wildPokemon.name}?`}
          </div>
        </FocusLock>
      </div>
    </div>
  );
};
