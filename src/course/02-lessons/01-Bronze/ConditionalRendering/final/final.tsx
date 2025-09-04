import { useState } from 'react';
import { Button } from '@shared/components/Button/Button.component';

interface ITrainerProps {
  trainerName: string;
}

export const PokemonTrainerStatus = (props: ITrainerProps) => {
  const [hasGymBadges, setHasGymBadges] = useState(false);

  const onEarnBadge = () => {
    setHasGymBadges(true);
  };

  const onLoseBadges = () => {
    setHasGymBadges(false);
  };

  return (
    <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
      {!hasGymBadges && (
        <div className="text-center">
          <h2 className="text-xl mb-4">🎒 Pokemon Trainer</h2>
          <p className="mb-4">Ready to challenge the Gym Leader?</p>
          <Button onClick={onEarnBadge}>🎯 Challenge Gym Leader</Button>
        </div>
      )}
      {hasGymBadges && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-600 mb-2">
            Welcome Gym Leader {props.trainerName}! 🏆
          </h1>
          <p className="mb-4">🥇 You've earned your gym badges!</p>
          <Button onClick={onLoseBadges}>🔄 Reset Journey</Button>
        </div>
      )}
    </div>
  );
};