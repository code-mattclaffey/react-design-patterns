import { ReactNode } from 'react';

interface ITypeEffectiveness {
  attacking: string;
  defending: string;
  effectiveness: number;
  description: string;
}

interface IPokemonTypeCalculatorProps {
  attackingType: string;
  render: (effectiveness: ITypeEffectiveness[]) => ReactNode;
}

const typeChart: Record<string, Record<string, number>> = {
  Fire: { Grass: 2, Water: 0.5, Fire: 0.5, Electric: 1, Ice: 2 },
  Water: { Fire: 2, Grass: 0.5, Water: 0.5, Electric: 1, Ice: 1 },
  Grass: { Water: 2, Fire: 0.5, Grass: 0.5, Electric: 1, Ice: 1 },
  Electric: { Water: 2, Fire: 1, Grass: 0.5, Electric: 0.5, Ice: 1 },
  Ice: { Grass: 2, Fire: 0.5, Water: 0.5, Electric: 1, Ice: 0.5 }
};

const getEffectivenessDescription = (value: number): string => {
  if (value === 2) return 'Super Effective';
  if (value === 0.5) return 'Not Very Effective';
  return 'Normal Damage';
};

// Table Display Component
const TableDisplay = (effectiveness: ITypeEffectiveness[]) => (
  <div className="bg-blue-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">
      {effectiveness[0]?.attacking} Type Effectiveness
    </h3>
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Defending Type</th>
            <th className="px-4 py-2 text-left">Multiplier</th>
            <th className="px-4 py-2 text-left">Effectiveness</th>
          </tr>
        </thead>
        <tbody>
          {effectiveness.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 font-medium">
                {item.defending}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`font-bold ${
                    item.effectiveness === 2
                      ? 'text-green-600'
                      : item.effectiveness === 0.5
                        ? 'text-red-600'
                        : 'text-gray-600'
                  }`}
                >
                  {item.effectiveness}x
                </span>
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Card Display Component
const CardDisplay = (effectiveness: ITypeEffectiveness[]) => (
  <div className="bg-green-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">
      {effectiveness[0]?.attacking} vs All Types
    </h3>
    <div className="grid grid-cols-2 gap-3">
      {effectiveness.map((item, index) => (
        <div
          key={index}
          className={`p-3 rounded ${
            item.effectiveness === 2
              ? 'bg-green-100 border-green-300'
              : item.effectiveness === 0.5
                ? 'bg-red-100 border-red-300'
                : 'bg-gray-100 border-gray-300'
          } border`}
        >
          <div className="font-bold">{item.defending}</div>
          <div className="text-sm">
            {item.effectiveness}x - {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PokemonTypeCalculator = ({
  attackingType,
  render
}: IPokemonTypeCalculatorProps) => {
  const defendingTypes = Object.keys(typeChart);

  const effectiveness: ITypeEffectiveness[] = defendingTypes.map(
    (defendingType) => ({
      attacking: attackingType,
      defending: defendingType,
      effectiveness: typeChart[attackingType]?.[defendingType] ?? 1,
      description: getEffectivenessDescription(
        typeChart[attackingType]?.[defendingType] ?? 1
      )
    })
  );

  return render(effectiveness);
};

export const Final = () => {
  return (
    <div className="space-y-6">
      {/* Table Display using render prop */}
      <PokemonTypeCalculator
        attackingType="Fire"
        render={(effectiveness) => TableDisplay(effectiveness)}
      />

      {/* Card Display using render prop */}
      <PokemonTypeCalculator
        attackingType="Water"
        render={(effectiveness) => CardDisplay(effectiveness)}
      />
    </div>
  );
};
