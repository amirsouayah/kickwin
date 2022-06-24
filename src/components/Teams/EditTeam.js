import React from 'react';
import TeamForm from './TeamForm';
import { useParams } from 'react-router-dom';

const EditTeam = ({ history, teams, setTeams }) => {
  const { id } = useParams();
  const teamToEdit = teams.find((team) => team.id === id);

  const handleOnSubmit = (team) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams([team, ...filteredTeams]);
    history.push('/');
  };

  return (
    <div>
      <TeamForm team={teamToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTeam;