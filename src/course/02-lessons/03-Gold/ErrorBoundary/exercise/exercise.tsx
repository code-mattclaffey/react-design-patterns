import { PokemonBackground } from '@shared/components/PokemonBackground/PokemonBackground';
import { Skeleton } from '@shared/components/Skeleton/Skeleton.component';
import {
  TPokemonCardsApiResponse,
  usePokedex
} from '@shared/hooks/usePokedex';

/**
 * Exercise: Add an error boundary
 *
 * 🤔 Observations of this file
 * So it's clear that line 92 is the error. A developer has added a ts-comment to ignore the problem but what we want to do first is make an error boundary so we know that we have caught the error incase this happens again.
 *
 * You may notice there already is a components/Feedback.tsx made and that was made purely on the basis that it's not the focus of the course to style things. We will be using that later.
 *
 * We need to tackle this two stages:
 *
 * Stage one - Create the error boundary in components/ErrorBoundary.tsx
 * Stage two - Apply the ErrorBoundary.
 *
 */

export const Final = () => {
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

// export const Final = () => (
//   <ErrorBoundary fallback={<Fallback />}>
//     <Screen />
//   </ErrorBoundary>
// );
