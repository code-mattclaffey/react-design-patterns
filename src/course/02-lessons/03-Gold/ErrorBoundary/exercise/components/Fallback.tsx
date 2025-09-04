import { PokemonBackground } from '@shared/components/PokemonBackground/PokemonBackground';

export const Fallback = () => {
  return (
    <PokemonBackground bodyClassName="max-w-[768px] mx-auto text-center flex flex-col justify-center h-screen">
      <div>
        <h1>
          <img
            src="/pokemon-logo.png"
            alt="Pokemon Battle Picker"
            className="inline-block w-96"
          />
          <span className="text-[76px] font-bold mb-4 block text-yellow-400">
            Opps, look like this one got away from us!
          </span>
        </h1>
        <p className="text-lg font-bold mb-4 block text-yellow-400 mb-8">
          We will make sure to try and catch it next time.
        </p>
        <a
          href="/?path=/story/lessons-🥇-gold-error-boundaries-03-final--default"
          className="my-12 rounded-lg py-6 px-16 text-white text-2xl font-bold bg-blue-900 hover:bg-blue-950 focus-within:bg-blue-950 no-underline"
        >
          Please try again
        </a>
      </div>
    </PokemonBackground>
  );
};
