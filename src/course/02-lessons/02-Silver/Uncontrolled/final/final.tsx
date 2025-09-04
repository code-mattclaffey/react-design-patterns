import { useState } from 'react';

interface IPokemonTeam {
  trainerName: string;
  teamName: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
}

export const PokemonTeamRegistration = () => {
  // Only keeping state for the submitted team display
  const [submittedTeam, setSubmittedTeam] =
    useState<IPokemonTeam | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Using FormData - still uncontrolled!
    const formData = new FormData(e.currentTarget);
    const team: IPokemonTeam = {
      trainerName: formData.get('trainerName') as string,
      teamName: formData.get('teamName') as string,
      pokemon1: formData.get('pokemon1') as string,
      pokemon2: formData.get('pokemon2') as string,
      pokemon3: formData.get('pokemon3') as string
    };

    setSubmittedTeam(team);

    // Reset form using built-in method
    e.currentTarget.reset();
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        Pokemon Team Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="trainer-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Trainer Name
          </label>
          <input
            id="trainer-name"
            name="trainerName"
            type="text"
            defaultValue=""
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label
            htmlFor="team-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Team Name
          </label>
          <input
            id="team-name"
            name="teamName"
            type="text"
            defaultValue=""
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label
            htmlFor="pokemon-1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pokemon 1
          </label>
          <input
            id="pokemon-1"
            name="pokemon1"
            type="text"
            defaultValue=""
            className="w-full p-2 border rounded"
            placeholder="e.g., Pikachu"
            required
          />
        </div>

        <div>
          <label
            htmlFor="pokemon-2"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pokemon 2
          </label>
          <input
            id="pokemon-2"
            name="pokemon2"
            type="text"
            defaultValue=""
            className="w-full p-2 border rounded"
            placeholder="e.g., Charizard"
            required
          />
        </div>

        <div>
          <label
            htmlFor="pokemon-3"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pokemon 3
          </label>
          <input
            id="pokemon-3"
            name="pokemon3"
            type="text"
            defaultValue=""
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
          <h3 className="font-bold text-green-800 mb-2">
            Team Registered!
          </h3>
          <p>
            <strong>Trainer:</strong> {submittedTeam.trainerName}
          </p>
          <p>
            <strong>Team:</strong> {submittedTeam.teamName}
          </p>
          <p>
            <strong>Pokemon:</strong> {submittedTeam.pokemon1},{' '}
            {submittedTeam.pokemon2}, {submittedTeam.pokemon3}
          </p>
        </div>
      )}
    </div>
  );
};

export const Final = () => {
  return (
    <div className="space-y-6">
      <PokemonTeamRegistration />
    </div>
  );
};
