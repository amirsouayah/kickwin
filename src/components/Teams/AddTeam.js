import React from 'react';
import TeamForm from './TeamForm';

const AddTeam = () => {
  const handleOnSubmit = (team) => {
    console.log(team);
  };

  return (
    <React.Fragment>
      <TeamForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTeam;