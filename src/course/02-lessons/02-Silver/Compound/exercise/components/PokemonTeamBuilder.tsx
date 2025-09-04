import classNames from 'classnames';

interface IPokemonTeamBuilder {
  title: string;
  children: React.ReactNode;
}

interface ITeamSlot {
  position: number;
  pokemonName?: string;
  pokemonLevel?: number;
  pokemonType?: string;
  isSelected: boolean;
  slotId: string;
  onClick: () => void;
  onSelect: () => void;
}

//  1B Move the useState from exercise.tsx here and manage the state internally
//  1C Create a React Context to share state between PokemonTeamBuilder and TeamSlot
//  1D Remove isSelected, slotId, onClick, onSelect from ITeamSlot interface
export const PokemonTeamBuilder = ({
  title,
  children
}: IPokemonTeamBuilder) => {
  return (
    <div className="pokemon-team-builder">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

//  1E Update this component to use useContext to get state instead of direct props
export const TeamSlot = ({
  position,
  pokemonName,
  pokemonLevel,
  pokemonType,
  isSelected,
  onClick,
  onSelect
}: ITeamSlot) => {
  return (
    <div
      className={classNames(
        'team-slot p-4 rounded-lg border-2 cursor-pointer transition-all',
        {
          'border-yellow-400 bg-yellow-50 shadow-lg': isSelected,
          'border-gray-300 bg-white hover:border-blue-300':
            !isSelected
        }
      )}
      onClick={onClick}
      onFocus={onSelect}
      tabIndex={0}
    >
      <div className="text-center">
        <div className="text-lg font-bold text-gray-600 mb-2">
          Slot {position}
        </div>

        {pokemonName ? (
          <div className="pokemon-info">
            <div className="text-xl font-bold text-blue-800 mb-1">
              {pokemonName}
            </div>
            <div className="text-sm text-gray-600 mb-1">
              Level {pokemonLevel}
            </div>
            <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {pokemonType}
            </div>
          </div>
        ) : (
          <div className="empty-slot">
            <div className="text-4xl mb-2">➕</div>
            <div className="text-sm text-gray-500">Empty Slot</div>
          </div>
        )}
      </div>
    </div>
  );
};

// 💻 1F export const PokemonTeam which will be an object containing the PokemonTeamBuilder and TeamSlot components
// Tip: export const ComponentName = Object.assign(ParentComponent, { MyComponent: Component });
export const PokemonTeam = Object.assign(PokemonTeamBuilder, {
  Slot: TeamSlot
});
