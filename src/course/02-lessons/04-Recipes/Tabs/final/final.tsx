import { PokemonTabs } from './PokemonTabs/PokemonTabs';
import { PokemonVerticalTabs } from './PokemonVerticalTabs/PokemonVerticalTabs';

export const Final = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Horizontal Tabs</h2>
        <PokemonTabs />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Vertical Tabs</h2>
        <PokemonVerticalTabs />
      </div>
    </div>
  );
};
