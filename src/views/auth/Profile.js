import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "./auth.css"
import logo from "../../assets/img/brand/reporter.png"
import logo2 from "../../assets/img/brand/organizer.png"
import logo3 from "../../assets/img/brand/stadium.png"
import { Grid } from '@material-ui/core';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
  const classes = useStyles();
  const history = useHistory();
  const [choice, setchoice] = useState(user.role[0])

  const redirect = () => {

    switch (choice) {
      case 'reporter':
        history.push("/signreporter")
        break;
      case 'organizer':
        history.push('/organiser')
        break;
      default: history.push('/stadium')
    }
  }

  return (
    <div class="container">

      <Grid container spacing={2}>


        <Grid xs={12} sm={4} item>


          <label>
            <input type="radio" name="product" class="card-input-element"
              onClick={() => setchoice('reporter')}
              //  defaultChecked 
              checked={choice === 'reporter' ? true : false}
            />

            <div class="panel panel-default card-input" style={{ width: "100%" }}>
              <div class="panel-heading">
                <img alt='' className='logo2' src={logo2} />
              </div>
              <div class="panel-body">
                <h2>Reporter</h2>
                <p>   Paragraph exemple de text lorem opsem

                </p>
              </div>
            </div>

          </label>


        </Grid>
        <Grid xs={12} sm={4} item>
          <label>
            <input type="radio" name="product" class="card-input-element"
              checked={choice === 'organizer' ? true : false}
              onClick={() => setchoice('organizer')} />

            <div class="panel panel-default card-input" style={{ width: "100%" }}>
              <div class="panel-heading">
                <img alt='' className='logo' src={logo} />
              </div>
              <div class="panel-body">
                <h2>Organizer</h2>
                <p>   Paragraph exemple de text lorem opsem

                </p>
              </div>
            </div>

          </label>


        </Grid>
        <Grid xs={12} sm={4} item>


          <label>
            <input type="radio" name="product" class="card-input-element"
              checked={choice === 'stadium' ? true : false}
              onClick={() => setchoice('stadium')} />

            <div class="panel panel-default card-input" style={{ width: "100%" }}>
              <div class="panel-heading" >
                <img alt='' className='logo3' src={logo3} />
              </div>
              <div class="panel-body">
                <h3>Stadium Register</h3>
                <p>                  </p>
                <p>   Paragraph exemple de text lorem opsem

                </p>
              </div>
            </div>

          </label>


        </Grid>


      </Grid>
      <button className='Button'
        variant="contained" onClick={() => redirect()}>
        Next
      </button>
    </div>

  );
}