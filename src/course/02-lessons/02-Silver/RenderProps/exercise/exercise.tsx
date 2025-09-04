interface ITypeEffectiveness {
  attacking: string;
  defending: string;
  effectiveness: number;
  description: string;
}

/*
  * Observations
  * 💅 Type effectiveness calculator is tightly coupled with table display
  * Logic and presentation are mixed together

  * Tasks
  * 1A 💻 - Add render prop to IPokemonTypeCalculatorProps:
  * render: (effectiveness: ITypeEffectiveness[]) => React.ReactNode;
  *
  * 1B 💻 - Replace the hardcoded table JSX with render prop call
  * 1C 💻 - In Exercise component, use render prop to display results
*/

interface IPokemonTypeCalculatorProps {
  attackingType: string;
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

export const PokemonTypeCalculator = ({
  attackingType
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

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">
        {attackingType} Type Effectiveness
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
};

export const Exercise = () => {
  return (
    <div className="space-y-6">
      <PokemonTypeCalculator attackingType="Fire" />
    </div>
  );
};
