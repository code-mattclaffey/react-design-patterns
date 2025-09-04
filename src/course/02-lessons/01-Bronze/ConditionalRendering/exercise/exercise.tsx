import { Button } from '@shared/components/Button/Button.component';

interface ITrainerProps {
  trainerName: string;
}

// 1g - 💣 The ignore lint rules can be removed now
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PokemonTrainerStatus = (props: ITrainerProps) => {
  // 1a - 💻 add a useState that has false as default. Name the variable [hasGymBadges, setHasGymBadges]

  // 1b - 💻 create me a onEarnBadge function which setHasGymBadges to be true

  // 1c - 💻 create me a onLoseBadges function which setHasGymBadges to be false

  // 1d - 💻 if hasGymBadges, return a button called "Reset Journey" with the onClick of onLoseBadges
  // 1e - 💻 if hasGymBadges, return some text called "Welcome Gym Leader {props.trainerName}! 🏆"

  // 1f - 💻 add onClick function onEarnBadge to the button
  return <Button>🎯 Challenge Gym Leader</Button>;
};
