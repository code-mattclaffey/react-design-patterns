/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { Button } from '@shared/components/Button/Button.component';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  captureRate: number;
}

interface UsePokemonCaptureProps {
  area: string;
  initialPokeballs?: number;
}

const WILD_POKEMON = [
  { id: 1, name: 'Pidgey', type: 'Flying', captureRate: 0.8 },
  { id: 2, name: 'Rattata', type: 'Normal', captureRate: 0.9 },
  { id: 3, name: 'Pikachu', type: 'Electric', captureRate: 0.3 },
  { id: 4, name: 'Caterpie', type: 'Bug', captureRate: 0.95 },
  { id: 5, name: 'Weedle', type: 'Bug/Poison', captureRate: 0.95 }
];

export const usePokemonCapture = ({
  initialPokeballs = 10
}: UsePokemonCaptureProps) => {
  const [wildPokemon, setWildPokemon] = useState<Pokemon | null>(
    null
  );
  const [pokeballs, setPokeballs] = useState(initialPokeballs);
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

    // Simulate capture attempt with animation delay
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

  return {
    wildPokemon,
    pokeballs,
    capturing,
    capturedPokemon,
    encounterPokemon,
    attemptCapture,
    runAway,
    restockPokeballs
  };
};

const PokemonCaptureInterface = ({ area }: { area: string }) => {
  const {
    wildPokemon,
    pokeballs,
    capturing,
    capturedPokemon,
    encounterPokemon,
    attemptCapture,
    runAway,
    restockPokeballs
  } = usePokemonCapture({ area });

  return (
    <div className="p-6 bg-green-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4">🌿 {area} Area</h3>

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
          🛒 Buy Pokeballs (+5)
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
          <h4 className="text-xl font-bold text-green-700">
            A wild {wildPokemon.name} appeared! ⚡
          </h4>
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
                className="bg-blue-100 px-3 py-1 rounded-full text-sm"
              >
                {pokemon.name} ({pokemon.type})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Final = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        🎯 Pokemon Capture System
      </h2>
      <p className="text-gray-600">
        Using the usePokemonCapture() hook to manage capture mechanics
        across different areas.
      </p>

      <div className="grid gap-4">
        <PokemonCaptureInterface area="Tall Grass" />
        <PokemonCaptureInterface area="Forest Path" />
      </div>
    </div>
  );
};
