import { use } from 'react';
import { delay } from '../../utils/delay';

// Cache the promise to prevent infinite re-creation
const charizardDataPromise = delay(1800);

const CharizardDetails = () => {
  use(charizardDataPromise);

  return (
    <div className="bg-red-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-red-800 mb-4">
        Charizard
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Stats</h3>
          <p>HP: 78</p>
          <p>Attack: 84</p>
          <p>Defense: 78</p>
          <p>Speed: 100</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Abilities</h3>
          <p>Blaze</p>
          <p>Solar Power (Hidden)</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Description</h3>
        <p>
          Charizard flies around the sky in search of powerful
          opponents. It breathes fire of such great heat that it melts
          anything.
        </p>
      </div>
    </div>
  );
};

export default CharizardDetails;
