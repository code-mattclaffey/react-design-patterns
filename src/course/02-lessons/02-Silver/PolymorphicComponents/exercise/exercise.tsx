import { HTMLAttributes } from 'react';

/**
 * Exercise: Refactor the StatusEffect component to correctly use the polymorphic pattern.
 *
 * 🤔 Observations of this file
 * In the current component you can see that the as prop is a string so if a developer in a team uses the wrong element they would just get the span element.
 * Status styles are clearly defined to the element so there is no flexibility in status effects which can lead to developers pleasing designers but... breaking accessibility or vice versa where designs do not look the same as what was provided.
 *
 * We need to tackle this in stages...
 *
 * Stage one - Refactoring the component to use Polymorphic style so we remove the switch statement.
 * Stage two - decouple the status effect to the element
 * Stage three - allow for developers to have a severity level for special status effects.
 *
 */

// 🧑🏻💻 1.a - Create a type called AllowedElements for 'span' | 'div' | 'button' | 'li'

// 🧑🏻💻 2.a - Create a type called StatusTypes and it's a union of 'normal' | 'burned' | 'poisoned' | 'paralyzed' | 'frozen' | 'asleep'

interface IStatusEffect extends HTMLAttributes<HTMLElement> {
  // 🧑🏻💻 1.b - Update the type of string to be the type you defined as part of 1.a
  as?: string;
  // 🧑🏻💻 2.b - Create a new prop called status?: StatusTypes;
  // 🧑🏻💻 3.a - Create a new prop called severity?: 'mild' | 'severe';
  children?: React.ReactNode | React.ReactNode[];
}

const StatusEffect = ({
  // 🧑🏻💻 1.c - add : Element = 'span' what this will do is redefine the prop to be a capital variable which can be used as a React Component.
  as = 'span',
  // 🧑🏻💻 2.c - Create a new prop called status
  // 🧑🏻💻 3.b - Create a new prop called severity
  children,
  ...rest
}: IStatusEffect) => {
  // 🧑🏻💻 1.d - Create a variable called statusClass which uses useMemo to return a string from an object key mapping. For example: useMemo(() => ({ span: 'text-gray-600' }[Element]), [Element]);
  // 🧑🏻💻 2.d - In the useMemo add the status as a dependency and then check if status exists. If it does, return status-specific classes if not, return what was there previously. Move onto 3.a.

  // 🧑🏻💻 3.c - create another useMemo for severityClass where we check if severity exists and return severity-specific classes.

  // 🧪 3.d Head down to the storybook Exercise Component and add a few more variants in.

  // 🧑🏻💻 1.e return the Element with the className={classNames('px-2 py-1 rounded text-sm', statusClass)} don't forget the ...rest
  // 💣 1.f remove the old code below. Move onto step 2.a.
  if (as)
    switch (as) {
      case 'span':
        return (
          <span
            {...rest}
            className="px-2 py-1 rounded text-sm bg-gray-200 text-gray-800"
          >
            {children}
          </span>
        );
      case 'div':
        return (
          <div
            {...rest}
            className="p-3 rounded bg-red-200 text-red-800 border border-red-300"
          >
            {children}
          </div>
        );
      case 'button':
        return (
          <button
            {...rest}
            className="px-3 py-2 rounded bg-yellow-200 text-yellow-800 border border-yellow-300 hover:bg-yellow-300"
          >
            {children}
          </button>
        );
      case 'li':
        return (
          <li
            {...rest}
            className="p-2 rounded bg-purple-200 text-purple-800 border border-purple-300 list-none"
          >
            {children}
          </li>
        );
      default:
        return (
          <span
            {...rest}
            className="px-2 py-1 rounded text-sm bg-gray-200 text-gray-800"
          >
            {children}
          </span>
        );
    }
};

export const Exercise = () => (
  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
    <h2 className="text-2xl font-bold mb-4 text-blue-800">
      🎮 Pokemon Status Effects
    </h2>

    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Battle Status (Spans)</h3>
        <div className="flex gap-2 flex-wrap">
          <StatusEffect as="span">Normal</StatusEffect>
          <StatusEffect as="span">Burned</StatusEffect>
          <StatusEffect as="span">Poisoned</StatusEffect>
          <StatusEffect as="span">Paralyzed</StatusEffect>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Status Alerts (Divs)</h3>
        <StatusEffect as="div">
          Your Pokemon is badly poisoned!
        </StatusEffect>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Heal Actions (Buttons)</h3>
        <div className="flex gap-2">
          <StatusEffect as="button">Heal Burn</StatusEffect>
          <StatusEffect as="button">Cure Paralysis</StatusEffect>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Status List (List Items)
        </h3>
        <ul className="space-y-1">
          <StatusEffect as="li">Frozen - Cannot move</StatusEffect>
          <StatusEffect as="li">Asleep - Skips turn</StatusEffect>
        </ul>
      </div>
    </div>

    {/* 3.e  Implement a status effect as span with status burned */}

    {/* 3.e  Implement a status effect as div with status poisoned and severity severe */}

    {/* 3.e  Implement a status effect as button with severity mild */}
  </div>
);
