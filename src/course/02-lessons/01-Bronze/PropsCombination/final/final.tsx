import classnames from 'classnames';

interface IPokemonCardProps {
  pokemon: {
    name: string;
    type: string;
    hp: number;
    level: number;
  };
  attack: {
    name: string;
    damage: number;
    description: string;
  };
  image: {
    alt: string;
    sources: string[];
  };
  styling?: {
    card?: string;
    name?: string;
    type?: string;
    hp?: string;
    attack?: string;
    image?: string;
  };
}

export const Final = ({
  pokemon,
  attack,
  image,
  styling
}: IPokemonCardProps) => {
  const [small, medium, large] = image.sources;

  return (
    <article
      className={classnames(
        'max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-400',
        styling?.card
      )}
    >
      <div className="bg-blue-600 text-white p-2 text-center">
        <span className="text-xs font-bold">
          ⭐ Level {pokemon.level}
        </span>
      </div>

      <picture className="block p-4">
        <source srcSet={large} media="(min-width: 62rem)" />
        <source srcSet={medium} media="(min-width: 40rem)" />
        <source srcSet={small} media="(min-width: 32rem)" />
        <img
          src={large}
          alt={image.alt}
          className={classnames(
            'w-full h-48 object-contain rounded-lg',
            styling?.image
          )}
        />
      </picture>

      <div className="px-6 py-4">
        <h3
          className={classnames(
            'font-bold text-2xl mb-2 text-center',
            styling?.name
          )}
        >
          {pokemon.name}
        </h3>

        <div className="flex justify-between items-center mb-4">
          <span
            className={classnames(
              'inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold',
              styling?.type
            )}
          >
            {pokemon.type} Type
          </span>
          <span
            className={classnames(
              'text-red-600 font-bold text-lg',
              styling?.hp
            )}
          >
            ❤️ {pokemon.hp} HP
          </span>
        </div>

        <div
          className={classnames(
            'bg-gray-100 rounded-lg p-3 border-l-4 border-orange-400',
            styling?.attack
          )}
        >
          <h4 className="font-bold text-orange-600 mb-1">
            ⚡ {attack.name} - {attack.damage} damage
          </h4>
          <p className="text-gray-700 text-sm">
            {attack.description}
          </p>
        </div>
      </div>
    </article>
  );
};
