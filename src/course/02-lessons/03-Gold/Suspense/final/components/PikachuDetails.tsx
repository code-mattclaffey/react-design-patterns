import { use } from 'react';
import { delay } from '../../utils/delay';

// Cache the promise to prevent infinite re-creation
const pikachuDataPromise = delay(1200);

const PikachuDetails = () => {
  use(pikachuDataPromise);

  return (
    <div className="bg-yellow-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">
        Pikachu
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Stats</h3>
          <p>HP: 35</p>
          <p>Attack: 55</p>
          <p>Defense: 40</p>
          <p>Speed: 90</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Abilities</h3>
          <p>Static</p>
          <p>Lightning Rod (Hidden)</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Description</h3>
        <p>
          This Pokemon has electricity-storing pouches on its cheeks.
          These appear to become electrically charged during the night
          while Pikachu sleeks.
        </p>
      </div>
    </div>
  );
};

export default PikachuDetails;
