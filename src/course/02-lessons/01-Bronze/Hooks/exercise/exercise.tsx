import { useState } from 'react';
import { Button } from '@shared/components/Button/Button.component';

/*
 * Observations
 * 💅 The current implementation uses the Render Props Pattern
 * We need to refactor this into a custom hook for Pokemon capture mechanics
 */

interface IPokemonCaptureProps {
  area: string;
  children: (captureState: {
    wildPokemon: Pokemon | null;
    pokeballs: number;
    capturing: boolean;
    capturedPokemon: Pokemon[];
    attemptCapture: () => void;
    encounterPokemon: () => void;
    runAway: () => void;
    restockPokeballs: (amount?: number) => void;
  }) => React.ReactNode;
}

interface Pokemon {
  id: number;
  name: string;
  type: string;
  captureRate: number;
}

const WILD_POKEMON = [
  { id: 1, name: 'Pidgey', type: 'Flying', captureRate: 0.8 },
  { id: 2, name: 'Rattata', type: 'Normal', captureRate: 0.9 },
  { id: 3, name: 'Pikachu', type: 'Electric', captureRate: 0.3 }
];

// 1A 💻 - We need to refactor this to be called usePokemonCapture
export const PokemonCaptureSystem = ({
  children
}: IPokemonCaptureProps) => {
  const [wildPokemon, setWildPokemon] = useState<Pokemon | null>(
    null
  );
  const [pokeballs, setPokeballs] = useState(10);
  const [capturing, setCapturing] = useState(false);
  const [capturedPokemon, setCapturedPokemon] = useState<Pokemon[]>(
    []
  );

  const encounterPokemon = () => {
    const randomPokemon =
      WILD_POKEMON[Math.floor(Math.random() * WILD_POKEMON.length)];
    setWildPokemon(randomPokemon);
  };

  const attemptCapture = async () => {
    if (!wildPokemon || pokeballs <= 0) return;

    setCapturing(true);
    setPokeballs((prev) => prev - 1);

    // Simulate capture attempt
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const success = Math.random() < wildPokemon.captureRate;
    if (success) {
      setCapturedPokemon((prev) => [...prev, wildPokemon]);
      setWildPokemon(null);
    }

    setCapturing(false);
  };

  const runAway = () => {
    setWildPokemon(null);
  };

  const restockPokeballs = (amount: number = 5) => {
    setPokeballs((prev) => prev + amount);
  };

  // 1C 💻 - Just return the object instead of children
  return children({
    wildPokemon,
    pokeballs,
    capturing,
    capturedPokemon,
    attemptCapture,
    encounterPokemon,
    runAway,
    restockPokeballs
  });
};

// 2A 🤔 - What if we wanted to use this capture logic in multiple components?
// Let's make a component which uses the usePokemonCapture hook and takes an area prop

export const Exercise = () => {
  // 1E 💻 - call the usePokemonCapture hook here
  return (
    <div className="p-6 bg-green-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        🌿 Pokemon Capture System
      </h2>

      {/* 1F 💣 - Remove the PokemonCaptureSystem component and use the hook directly */}
      <PokemonCaptureSystem area="tall-grass">
        {({
          wildPokemon,
          pokeballs,
          capturing,
          capturedPokemon,
          attemptCapture,
          encounterPokemon,
          runAway,
          restockPokeballs
        }) => (
          <div>
            <div className="mb-4 flex justify-between items-center">
              <div>
                <p className="text-lg">Pokeballs: {pokeballs} 🔴</p>
                <p className="text-sm text-gray-600">
                  Captured: {capturedPokemon.length} Pokemon
                </p>
              </div>
              <Button
                onClick={() => restockPokeballs()}
                disabled={pokeballs >= 20}
              >
                🛍️ Buy Pokeballs (+5)
              </Button>
            </div>

            {!wildPokemon ? (
              <div className="text-center">
                <p className="mb-4">No wild Pokemon in sight...</p>
                <Button onClick={encounterPokemon}>
                  🔍 Search for Pokemon
                </Button>
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-green-300">
                <h3 className="text-xl font-bold text-green-700">
                  A wild {wildPokemon.name} appeared! ⚡
                </h3>
                <p className="text-gray-600 mb-4">
                  Type: {wildPokemon.type} | Capture Rate:{' '}
                  {(wildPokemon.captureRate * 100).toFixed(0)}%
                </p>

                {capturing ? (
                  <div className="text-center">
                    <p className="text-lg animate-pulse">
                      🔴 Pokeball is shaking...
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={attemptCapture}
                      disabled={pokeballs <= 0}
                    >
                      🔴 Throw Pokeball ({pokeballs} left)
                    </Button>
                    <Button onClick={runAway}>🏃 Run Away</Button>
                  </div>
                )}
              </div>
            )}

            {capturedPokemon.length > 0 && (
              <div className="mt-4">
                <h4 className="font-bold mb-2">Captured Pokemon:</h4>
                <div className="flex gap-2 flex-wrap">
                  {capturedPokemon.map((pokemon, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 px-2 py-1 rounded text-sm"
                    >
                      {pokemon.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </PokemonCaptureSystem>
    </div>
  );
};
