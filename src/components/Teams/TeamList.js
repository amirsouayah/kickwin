import React from 'react';
import _ from 'lodash';
import Team from './Team';
import Header from 'components/Headers/HeaderOrga';
import Popup from 'components/PopUp/Popup';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const TeamsList = ({teams, setTeams}) => {

  const handleRemoveTeam = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <React.Fragment>
      <Header />
      <Grid item xs={12} xl={8}>
        <Grid
                      container
                      component={Box}
                      alignItems="center"
                      justifyContent="center"
                    >
       
        <div className='team-list'>
          {!_.isEmpty(teams) ? (
            teams.map((team) => (
              <Team key={team.id} {...team} handleRemoveTeam={handleRemoveTeam} />
            ))
          ) : (
            <p className='message'> No Teams Available Please add Some Teams</p>
          )}
           <Popup/>
        </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TeamsList;