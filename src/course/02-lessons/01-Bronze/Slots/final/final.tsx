import classNames from 'classnames';

interface PokemonMapProps {
  className?: string;
  northSlot?: React.ReactNode;
  southSlot?: React.ReactNode;
  eastSlot?: React.ReactNode;
  westSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
}

const mapContainerClasses = 'grid grid-cols-3 grid-rows-3 gap-2 w-80 h-80 p-4 bg-green-100 rounded-lg border-2 border-green-300';

export const PokemonMap = ({
  className,
  northSlot,
  southSlot,
  eastSlot,
  westSlot,
  centerSlot
}: PokemonMapProps) => {
  return (
    <div className={classNames(mapContainerClasses, className)}>
      {/* Empty top-left */}
      <div></div>
      
      {/* North slot */}
      <div className="flex items-center justify-center">
        {northSlot}
      </div>
      
      {/* Empty top-right */}
      <div></div>
      
      {/* West slot */}
      <div className="flex items-center justify-center">
        {westSlot}
      </div>
      
      {/* Center slot */}
      <div className="flex items-center justify-center">
        {centerSlot}
      </div>
      
      {/* East slot */}
      <div className="flex items-center justify-center">
        {eastSlot}
      </div>
      
      {/* Empty bottom-left */}
      <div></div>
      
      {/* South slot */}
      <div className="flex items-center justify-center">
        {southSlot}
      </div>
      
      {/* Empty bottom-right */}
      <div></div>
    </div>
  );
};

const LocationCard = ({ name, icon, bgColor }: { name: string; icon: string; bgColor: string }) => (
  <div className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 text-sm font-bold text-white shadow-md w-full h-full ${bgColor}`}>
    <span className="text-2xl mb-1">{icon}</span>
    <span className="text-xs text-center">{name}</span>
  </div>
);

export const Final = () => (
  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
    <h2 className="text-2xl font-bold mb-4 text-blue-800">🗺️ Pokemon World Map</h2>
    
    <PokemonMap
      northSlot={
        <LocationCard 
          name="Viridian Forest" 
          icon="🌲" 
          bgColor="bg-green-600" 
        />
      }
      southSlot={
        <LocationCard 
          name="Route 1" 
          icon="🛤️" 
          bgColor="bg-yellow-600" 
        />
      }
      eastSlot={
        <LocationCard 
          name="Power Plant" 
          icon="⚡" 
          bgColor="bg-yellow-500" 
        />
      }
      westSlot={
        <LocationCard 
          name="Mt. Silver" 
          icon="🏔️" 
          bgColor="bg-gray-600" 
        />
      }
      centerSlot={
        <LocationCard 
          name="Pallet Town" 
          icon="🏠" 
          bgColor="bg-blue-600" 
        />
      }
    />
    
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2 text-blue-800">Alternative Layout</h3>
      <PokemonMap
        centerSlot={
          <LocationCard 
            name="Cerulean City" 
            icon="💧" 
            bgColor="bg-cyan-600" 
          />
        }
        northSlot={
          <LocationCard 
            name="Cerulean Cave" 
            icon="🕳️" 
            bgColor="bg-purple-600" 
          />
        }
        eastSlot={
          <LocationCard 
            name="Route 25" 
            icon="🌊" 
            bgColor="bg-blue-500" 
          />
        }
      />
    </div>
  </div>
);