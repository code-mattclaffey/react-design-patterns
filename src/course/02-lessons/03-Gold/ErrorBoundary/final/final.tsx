import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonCardsApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Fallback } from './components/Fallback';
import { PokemonBackground } from '@shared/components/PokemonBackground/PokemonBackground';

const Screen = () => {
  const { data, isLoading, isError } = usePokedex<
    TPokemonCardsApiResponse[]
  >({
    path: 'cards',
    queryParams: 'pageSize=24&q=types:fire&supertype:pokemon'
  });

  if (isError) {
    return (
      <PokemonBackground>
        <strong className="font-bold">Holy smokes!</strong> <br />
        <span className="block sm:inline">
          It looks like Team Rocket has captured the fire pokemon!
        </span>
      </PokemonBackground>
    );
  }

  if (isLoading) {
    return (
      <PokemonBackground>
        <Skeleton height="h-12" width="w-96" />
        <div className="grid grid-cols-6 gap-6">
          {[...new Array(12)].map((_, index) => (
            <Skeleton key={index} height="h-[207px]" />
          ))}
        </div>
      </PokemonBackground>
    );
  }

  return (
    <PokemonBackground>
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        Fire Pokemon
      </h2>
      <div className="grid grid-cols-6 gap-6">
        {data &&
          data.length > 0 &&
          data.map((pokemon) => (
            <div key={pokemon.id}>
              <img
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                src={pokemon.imagessss.small}
                alt={pokemon.name}
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </PokemonBackground>
  );
};

export const Final = () => (
  <ErrorBoundary fallback={<Fallback />}>
    <Screen />
  </ErrorBoundary>
);
