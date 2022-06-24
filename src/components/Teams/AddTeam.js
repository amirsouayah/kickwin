import React from 'react';
import TeamForm from './TeamForm';

const AddTeam = ({history, teams, setTeams}) => {
  const handleOnSubmit = (team) => {
    console.log(team);
    setTeams([team,...teams]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <TeamForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTeam;