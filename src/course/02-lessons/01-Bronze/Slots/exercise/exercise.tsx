import classNames from 'classnames';

// 💻 1A - This component uses individual props for each map location. Can we refactor it to use slots instead?
interface IPokemonMap {
  className?: string;

  // North area props
  showNorthArea?: boolean;
  northAreaName?: string;
  northAreaIcon?: string;
  northAreaColor?: string;

  // South area props
  showSouthArea?: boolean;
  southAreaName?: string;
  southAreaIcon?: string;
  southAreaColor?: string;

  // East area props
  showEastArea?: boolean;
  eastAreaName?: string;
  eastAreaIcon?: string;
  eastAreaColor?: string;

  // West area props
  showWestArea?: boolean;
  westAreaName?: string;
  westAreaIcon?: string;
  westAreaColor?: string;

  // Center area props
  showCenterArea?: boolean;
  centerAreaName?: string;
  centerAreaIcon?: string;
  centerAreaColor?: string;
}

const mapContainerClasses =
  'grid grid-cols-3 grid-rows-3 gap-2 w-80 h-80 p-4 bg-green-100 rounded-lg border-2 border-green-300';
const areaClasses =
  'flex flex-col items-center justify-center p-3 rounded-lg border-2 text-sm font-bold text-white shadow-md';

// 💻 1B - Look at all these props and conditional logic! This is hard to maintain.
// 💻 1C - Refactor this to use northSlot, southSlot, eastSlot, westSlot, centerSlot instead
export const PokemonMap = ({
  className,
  showNorthArea,
  northAreaName,
  northAreaIcon,
  northAreaColor,
  showSouthArea,
  southAreaName,
  southAreaIcon,
  southAreaColor,
  showEastArea,
  eastAreaName,
  eastAreaIcon,
  eastAreaColor,
  showWestArea,
  westAreaName,
  westAreaIcon,
  westAreaColor,
  showCenterArea,
  centerAreaName,
  centerAreaIcon,
  centerAreaColor
}: IPokemonMap) => {
  return (
    <div className={classNames(mapContainerClasses, className)}>
      {/* Empty top-left */}
      <div></div>

      {/* North area */}
      <div
        className={classNames(
          areaClasses,
          northAreaColor || 'bg-gray-400'
        )}
      >
        {showNorthArea && (
          <>
            <span className="text-2xl mb-1">{northAreaIcon}</span>
            <span className="text-xs text-center">
              {northAreaName}
            </span>
          </>
        )}
      </div>

      {/* Empty top-right */}
      <div></div>

      {/* West area */}
      <div
        className={classNames(
          areaClasses,
          westAreaColor || 'bg-gray-400'
        )}
      >
        {showWestArea && (
          <>
            <span className="text-2xl mb-1">{westAreaIcon}</span>
            <span className="text-xs text-center">
              {westAreaName}
            </span>
          </>
        )}
      </div>

      {/* Center area */}
      <div
        className={classNames(
          areaClasses,
          centerAreaColor || 'bg-gray-400'
        )}
      >
        {showCenterArea && (
          <>
            <span className="text-2xl mb-1">{centerAreaIcon}</span>
            <span className="text-xs text-center">
              {centerAreaName}
            </span>
          </>
        )}
      </div>

      {/* East area */}
      <div
        className={classNames(
          areaClasses,
          eastAreaColor || 'bg-gray-400'
        )}
      >
        {showEastArea && (
          <>
            <span className="text-2xl mb-1">{eastAreaIcon}</span>
            <span className="text-xs text-center">
              {eastAreaName}
            </span>
          </>
        )}
      </div>

      {/* Empty bottom-left */}
      <div></div>

      {/* South area */}
      <div
        className={classNames(
          areaClasses,
          southAreaColor || 'bg-gray-400'
        )}
      >
        {showSouthArea && (
          <>
            <span className="text-2xl mb-1">{southAreaIcon}</span>
            <span className="text-xs text-center">
              {southAreaName}
            </span>
          </>
        )}
      </div>

      {/* Empty bottom-right */}
      <div></div>
    </div>
  );
};

// 💻 1D - Look at how verbose these prop combinations are!
// 💻 1E - Refactor these to use slots: northSlot={<LocationCard />}, centerSlot={<TownCard />}, etc.
export const Exercise = () => (
  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
    <h2 className="text-2xl font-bold mb-4 text-blue-800">
      🗺️ Pokemon World Map
    </h2>

    <PokemonMap
      showNorthArea={true}
      northAreaName="Viridian Forest"
      northAreaIcon="🌲"
      northAreaColor="bg-green-600"
      showSouthArea={true}
      southAreaName="Route 1"
      southAreaIcon="🛤️"
      southAreaColor="bg-yellow-600"
      showEastArea={true}
      eastAreaName="Power Plant"
      eastAreaIcon="⚡"
      eastAreaColor="bg-yellow-500"
      showWestArea={true}
      westAreaName="Mt. Silver"
      westAreaIcon="🏔️"
      westAreaColor="bg-gray-600"
      showCenterArea={true}
      centerAreaName="Pallet Town"
      centerAreaIcon="🏠"
      centerAreaColor="bg-blue-600"
    />
  </div>
);
