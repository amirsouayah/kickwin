import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./competition.css"
import logo from "../../assets/img/brand/Group 2.1.png"
import logo2 from "../../assets/img/brand/league.png"
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',


  },
  button: {
    margin: theme.spacing(1),
  },

}));

export default function Home() {
  const classes = useStyles();
  const [choice, setchoice] = useState('league')
  const [value, setValue] = React.useState('league');
  const history = useHistory()
  const redirect = () => {
    // WITH IF STATEMENT
    // if (choice === 'league') {
    //   history.push('organiser/newLeague')
    // } else {
    //   history.push('/organiser/newCup')
    // }

    // WITH SWITCH STATEMENT
    switch (choice) {
      case 'cup':
        history.push('/organiser/newCup')
        break;
      case 'league':
        history.push('/organiser/newLeague')
        break;
      default: return
    }
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div class="container">

      <Grid container spacing={2}>


        <Grid xs={12} sm={6} item>


          <label>
            <input type="radio" name="cup" class="card-input-element"
              onClick={() => setchoice('league')} defaultChecked
            />

            <div class="panel panel-default card-input">
              <div class="panel-heading">
                <img alt='' className='logo2' src={logo2} />
              </div>
              <div class="panel-body">
                <h2>LEAGUE</h2>
              </div>
            </div>

          </label>


        </Grid>
        <Grid xs={12} sm={6} item>

          <div class="col-md-4 col-lg-4 col-sm-4">

            <label>
              <input type="radio" name="cup" class="card-input-element"
                onClick={() => setchoice('cup')} />

              <div class="panel panel-default card-input">
                <div class="panel-heading">
                  <img alt='' className='logo' src={logo} />
                </div>
                <div class="panel-body">
                  <h2>Cup</h2>
                </div>
              </div>
            </label>
          </div>
        </Grid>

      </Grid>
      <button className='Button'
        variant="contained"
        onClick={redirect}>
        Next
      </button>
    </div>

  );
}