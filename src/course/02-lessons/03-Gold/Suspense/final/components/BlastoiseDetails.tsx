import { use } from 'react';
import { delay } from '../../utils/delay';

// Cache the promise to prevent infinite re-creation
const blastoiseDataPromise = delay(1000);

const BlastoiseDetails = () => {
  use(blastoiseDataPromise);

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        Blastoise
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Stats</h3>
          <p>HP: 79</p>
          <p>Attack: 83</p>
          <p>Defense: 100</p>
          <p>Speed: 78</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Abilities</h3>
          <p>Torrent</p>
          <p>Rain Dish (Hidden)</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Description</h3>
        <p>
          Blastoise has water spouts that protrude from its shell. The
          water spouts are very accurate and can punch through thick
          steel.
        </p>
      </div>
    </div>
  );
};

export default BlastoiseDetails;
