import classNames from 'classnames';
import { HTMLAttributes, useMemo } from 'react';

type AllowedElements = 'span' | 'div' | 'button' | 'li';

type StatusTypes = 'normal' | 'burned' | 'poisoned' | 'paralyzed' | 'frozen' | 'asleep';

interface IStatusEffect extends HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  status?: StatusTypes;
  severity?: 'mild' | 'severe';
  children?: React.ReactNode;
}

const StatusEffect = ({
  as: Element = 'span',
  status,
  severity,
  children,
  ...rest
}: IStatusEffect) => {
  const statusClass = useMemo(
    () =>
      status
        ? {
            normal: 'bg-gray-200 text-gray-800 border-gray-300',
            burned: 'bg-red-200 text-red-800 border-red-300',
            poisoned: 'bg-purple-200 text-purple-800 border-purple-300',
            paralyzed: 'bg-yellow-200 text-yellow-800 border-yellow-300',
            frozen: 'bg-blue-200 text-blue-800 border-blue-300',
            asleep: 'bg-indigo-200 text-indigo-800 border-indigo-300'
          }[status]
        : {
            span: 'bg-gray-200 text-gray-800 border-gray-300',
            div: 'bg-gray-100 text-gray-700 border-gray-200',
            button: 'bg-blue-200 text-blue-800 border-blue-300 hover:bg-blue-300',
            li: 'bg-gray-50 text-gray-600 border-gray-200'
          }[Element],
    [Element, status]
  );

  const severityClass = useMemo(
    () => {
      if (!severity) return '';
      return severity === 'severe' 
        ? 'font-bold border-2 shadow-md' 
        : 'opacity-75';
    },
    [severity]
  );

  const baseClasses = useMemo(() => {
    const base = 'rounded border';
    switch (Element) {
      case 'span':
        return `${base} px-2 py-1 text-sm inline-block`;
      case 'div':
        return `${base} p-3`;
      case 'button':
        return `${base} px-3 py-2 cursor-pointer transition-colors`;
      case 'li':
        return `${base} p-2 list-none`;
      default:
        return `${base} px-2 py-1 text-sm`;
    }
  }, [Element]);

  return (
    <Element
      {...rest}
      className={classNames(baseClasses, statusClass, severityClass)}
    >
      {children}
    </Element>
  );
};

export const Final = () => (
  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
    <h2 className="text-2xl font-bold mb-4 text-blue-800">🎮 Pokemon Status Effects</h2>
    
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Battle Status (Spans)</h3>
        <div className="flex gap-2 flex-wrap">
          <StatusEffect as="span">Normal</StatusEffect>
          <StatusEffect as="span" status="burned">Burned</StatusEffect>
          <StatusEffect as="span" status="poisoned">Poisoned</StatusEffect>
          <StatusEffect as="span" status="paralyzed">Paralyzed</StatusEffect>
          <StatusEffect as="span" status="frozen">Frozen</StatusEffect>
          <StatusEffect as="span" status="asleep">Asleep</StatusEffect>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Status Alerts (Divs)</h3>
        <div className="space-y-2">
          <StatusEffect as="div" status="poisoned" severity="severe">
            Your Pokemon is badly poisoned! It will take damage each turn.
          </StatusEffect>
          <StatusEffect as="div" status="burned" severity="mild">
            Your Pokemon is burned. It takes minor damage each turn.
          </StatusEffect>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Heal Actions (Buttons)</h3>
        <div className="flex gap-2 flex-wrap">
          <StatusEffect as="button" status="burned">Heal Burn</StatusEffect>
          <StatusEffect as="button" status="paralyzed">Cure Paralysis</StatusEffect>
          <StatusEffect as="button" status="poisoned" severity="severe">Antidote</StatusEffect>
          <StatusEffect as="button" severity="mild">Full Heal</StatusEffect>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Status List (List Items)</h3>
        <ul className="space-y-1">
          <StatusEffect as="li" status="frozen">Frozen - Cannot move until thawed</StatusEffect>
          <StatusEffect as="li" status="asleep">Asleep - Skips turn until awakened</StatusEffect>
          <StatusEffect as="li" status="paralyzed" severity="severe">Fully Paralyzed - Cannot attack</StatusEffect>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Advanced Examples</h3>
        <div className="space-y-2">
          <StatusEffect as="span" status="burned">🔥 Burned</StatusEffect>
          <StatusEffect as="div" status="poisoned" severity="severe">
            ☠️ Severely Poisoned - Seek immediate treatment!
          </StatusEffect>
          <StatusEffect as="button" severity="mild" onClick={() => console.log('Healing...')}>
            💊 Use Potion
          </StatusEffect>
        </div>
      </div>
    </div>
  </div>
);