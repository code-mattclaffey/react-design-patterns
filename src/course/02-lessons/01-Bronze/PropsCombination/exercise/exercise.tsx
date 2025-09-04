import classnames from 'classnames';

/*

  1a👨🏻💻 group the following together:

  * pokemon - pokemonName, pokemonType, pokemonHp, pokemonLevel
  * attack - attackName, attackDamage, attackDescription
  * image - imageAltText, imageUrlSmall, imageUrlMedium, imageUrlLarge
  * styling - cardClassName, nameClassName, typeClassName, hpClassName, attackClassName, imageClassName

*/
interface IPokemonCardProps {
  pokemonName: string;
  pokemonType: string;
  pokemonHp: number;
  pokemonLevel: number;
  attackName: string;
  attackDamage: number;
  attackDescription: string;
  imageAltText: string;
  imageUrlSmall: string;
  imageUrlMedium: string;
  imageUrlLarge: string;
  cardClassName?: string;
  nameClassName?: string;
  typeClassName?: string;
  hpClassName?: string;
  attackClassName?: string;
  imageClassName?: string;
}

/*
  1b👨🏻💻 Update the props to match the new grouped types defined above.
*/
export const Exercise = ({
  pokemonName,
  pokemonType,
  pokemonHp,
  pokemonLevel,
  attackName,
  attackDamage,
  attackDescription,
  imageAltText,
  imageUrlSmall,
  imageUrlMedium,
  imageUrlLarge,
  cardClassName,
  nameClassName,
  typeClassName,
  hpClassName,
  attackClassName,
  imageClassName
}: IPokemonCardProps) => {
  /*
    2a 🤔 Could we destructure the image to be [small, medium, large]?
  */
  /*
    1c👨🏻💻 Update the props in the jsx to use the grouped structure
  */
  return (
    <article
      className={classnames(
        'max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-400',
        cardClassName
      )}
    >
      <div className="bg-blue-600 text-white p-2 text-center">
        <span className="text-xs font-bold">
          ⭐ Level {pokemonLevel}
        </span>
      </div>

      <picture className="block p-4">
        <source srcSet={imageUrlLarge} media="(min-width: 62rem)" />
        <source srcSet={imageUrlMedium} media="(min-width: 40rem)" />
        <source srcSet={imageUrlSmall} media="(min-width: 32rem)" />
        <img
          src={imageUrlLarge}
          alt={imageAltText}
          className={classnames(
            'w-full h-48 object-contain rounded-lg',
            imageClassName
          )}
        />
      </picture>

      <div className="px-6 py-4">
        <h3
          className={classnames(
            'font-bold text-2xl mb-2 text-center',
            nameClassName
          )}
        >
          {pokemonName}
        </h3>

        <div className="flex justify-between items-center mb-4">
          <span
            className={classnames(
              'inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold',
              typeClassName
            )}
          >
            {pokemonType} Type
          </span>
          <span
            className={classnames(
              'text-red-600 font-bold text-lg',
              hpClassName
            )}
          >
            ❤️ {pokemonHp} HP
          </span>
        </div>

        <div
          className={classnames(
            'bg-gray-100 rounded-lg p-3 border-l-4 border-orange-400',
            attackClassName
          )}
        >
          <h4 className="font-bold text-orange-600 mb-1">
            ⚡ {attackName} - {attackDamage} damage
          </h4>
          <p className="text-gray-700 text-sm">{attackDescription}</p>
        </div>
      </div>
    </article>
  );
};
