import { useState } from 'react';

interface IPokemonTeam {
  trainerName: string;
  teamName: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
}

/*
  * Observations
  * 💅 Form uses controlled components with lots of state management
  * Every input change triggers a re-render
  * Lots of boilerplate for simple form handling

  * Tasks
  * 1A 👨🏻💻 - Replace useState with useRef for each form field
  * 1B 👨🏻💻 - Remove onChange handlers and use defaultValue instead of value
  * 1C 👨🏻💻 - Update handleSubmit to read values from refs
  * 1D 👨🏻💻 - Remove all state-related code
*/

export const PokemonTeamRegistration = () => {
  const [trainerName, setTrainerName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [pokemon1, setPokemon1] = useState('');
  const [pokemon2, setPokemon2] = useState('');
  const [pokemon3, setPokemon3] = useState('');
  const [submittedTeam, setSubmittedTeam] = useState<IPokemonTeam | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const team: IPokemonTeam = {
      trainerName,
      teamName,
      pokemon1,
      pokemon2,
      pokemon3
    };
    
    setSubmittedTeam(team);
    
    // Reset form
    setTrainerName('');
    setTeamName('');
    setPokemon1('');
    setPokemon2('');
    setPokemon3('');
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">Pokemon Team Registration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="trainer-name" className="block text-sm font-medium text-gray-700 mb-1">
            Trainer Name
          </label>
          <input
            id="trainer-name"
            type="text"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="team-name" className="block text-sm font-medium text-gray-700 mb-1">
            Team Name
          </label>
          <input
            id="team-name"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="pokemon-1" className="block text-sm font-medium text-gray-700 mb-1">
            Pokemon 1
          </label>
          <input
            id="pokemon-1"
            type="text"
            value={pokemon1}
            onChange={(e) => setPokemon1(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Pikachu"
            required
          />
        </div>

        <div>
          <label htmlFor="pokemon-2" className="block text-sm font-medium text-gray-700 mb-1">
            Pokemon 2
          </label>
          <input
            id="pokemon-2"
            type="text"
            value={pokemon2}
            onChange={(e) => setPokemon2(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Charizard"
            required
          />
        </div>

        <div>
          <label htmlFor="pokemon-3" className="block text-sm font-medium text-gray-700 mb-1">
            Pokemon 3
          </label>
          <input
            id="pokemon-3"
            type="text"
            value={pokemon3}
            onChange={(e) => setPokemon3(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Blastoise"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register Team
        </button>
      </form>

      {submittedTeam && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h3 className="font-bold text-green-800 mb-2">Team Registered!</h3>
          <p><strong>Trainer:</strong> {submittedTeam.trainerName}</p>
          <p><strong>Team:</strong> {submittedTeam.teamName}</p>
          <p><strong>Pokemon:</strong> {submittedTeam.pokemon1}, {submittedTeam.pokemon2}, {submittedTeam.pokemon3}</p>
        </div>
      )}
    </div>
  );
};

export const Exercise = () => {
  return <PokemonTeamRegistration />;
};