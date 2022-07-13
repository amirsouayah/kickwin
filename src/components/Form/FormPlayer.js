import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
import UploadButtons from './UploadButton';
import axios from 'axios';
import { useParams } from "react-router-dom";
import swal from 'sweetalert';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200,
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
const position = [

  { label: 'Goalkeeper' },
  { label: 'Right Fullback' },
  { label: 'Left Fullback' },
  { label: 'Center Back' },
  { label: 'Defending/Holding Midfielder' },
  { label: 'Right Midfielder/Winger' },
  { label: 'Central/Box-to-Box Midfielder' },
  { label: 'Striker' },
  { label: 'Attacking Midfielder/Playmaker' },
  { label: 'Left Midfielder/Wingers' },


];



const FormPlayer = (props) => {
  const classes = useStyles();
  // create state variables for each input

  const [body, setBody] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setBody(props.dataForm)
    console.log(body);

  }, [props.dataForm]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, country, password);
    // handleClose();
  };



  const newPlayer = () => {
    // localhost:5000/team/update/id:team 
    axios.post(`http://localhost:5000/player/create`, body)
      .then(res => {
        if (res.status === 200) {
          // updateTeam(res.body)
          swal({
            title: "Player Created",
            text: "Thank you! Your Player has been successfully Updated",
            icon: "success",
          }).then(function () {
            updateTeam(res.data.player._id);
          });
          // setDatateam(res.data)
          // props.setOpen(false)
          // window.location.reload();

        }
      }).catch(err => {
      });
  }

  const updateTeam = (idPlayer) => {
    axios.put(`http://localhost:5000/team/updatepl/${id}`, { players: [idPlayer] })
      .then(res => {
        if (res.status === 200) {

          window.location.reload();
        }
      }).catch(err => {
      });
  }

  const updateplayer = (id) => {
    axios.put(`http://localhost:5000/player/update/${id}`, body)
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Player Updated",
            text: "Thank you! Your Player has been successfully Updated",
            icon: "success",
          }).then(function () {
            props.setOpen(false)
            window.location.reload();
            props.getAllPlayer()
          });
        }
      }).catch(err => {
      });
  }

  return (
    <Grid>
      <Card style={{ margin: "0 auto" }}>
        <CardContent>
          {props.sendData === 'create' ?
            <Typography gutterBottom variant="h2" align="center"> ADD NEW PLAYER </Typography>
            :
            <Typography variant='h3' align='center'> UPDATE PLAYER </Typography>
          }
          <CardContent>
            <form className={classes.root} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} item align="center" >
                  <UploadButtons align="center" />
                </Grid>
                <Grid xs={12} sm={12} item>
                  {props.sendData === 'create' ?
                    <TextField
                      label="Player Name"
                      variant='outlined'
                      placeholder="Player Name"
                      fullWidth
                      required
                      value={body && body.name}
                      onChange={(e) => setBody({ ...body, ...{ name: e.target.value } })}
                    /> :
                    <TextField
                      label="Player Name"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      required
                      value={body && body.name}
                      onChange={(e) => setBody({ ...body, ...{ name: e.target.value } })}
                    />}
                </Grid>
                <Grid xs={12} sm={6} item>
                  {props.sendData === 'create' ? <TextField
                    label="Age"
                    type="number"
                    fullWidth
                    variant='outlined'
                    placeholder="Age"
                    required
                    value={body && body.age}
                    onChange={(e) => setBody({ ...body, ...{ age: e.target.value } })}
                  /> :
                    <TextField
                      label="Age"
                      type="number"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      value={body && body.age}
                      onChange={(e) => setBody({ ...body, ...{ age: e.target.value } })}
                    />}
                  {/* <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              /> */}
                </Grid>
                <Grid xs={12} sm={6} item>
                  {props.sendData === 'create' ?
                    <TextField
                      label="Phone"
                      fullWidth
                      type="number"
                      placeholder="Phone "
                      variant='outlined'
                      required
                      value={body && body.phone}
                      onChange={(e) => setBody({ ...body, ...{ phone: e.target.value } })}
                    />
                    :
                    <TextField
                      label="Phone"
                      type="number"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      value={body && body.phone}
                      onChange={(e) => setBody({ ...body, ...{ phone: e.target.value } })}
                    />}
                </Grid>
                {/* <TextField
              label="Position dans le terrain"
              InputLabelProps={{
                shrink: true,
              }}
              required
              value={body && body.posInfo}
              onChange={(e) => setBody({ ...body, ...{ posInfo: e.target.value } })}
            /> */}
                <Grid xs={12} sm={6} item>
                  <h8 align='baseline' >Select Position</h8>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <select class="select" required label="Post" onChange={(e) => { setBody({ ...body, ...{ posInfo: e.target.value } }) }} value={body && body.posInfo} >
                    {position.map((el, index) => {
                      return (
                        <option key={index} value={el.label}>{el.label}</option>
                      )
                    })
                    }
                  </select >
                </Grid>
                <Grid xs={12} sm={6} item  >
                  <Button variant="contained" onClick={() => props.setOpen(false)} fullWidth>
                    Cancel
                  </Button>
                </Grid>
                <Grid xs={12} sm={6} item >
                  {props.sendData === 'create' ?
                    <Button type="submit" variant="contained" color="primary" onClick={() => newPlayer()} fullWidth>
                      Add Player
                    </Button>
                    :
                    <Button type="submit" variant="contained" color="primary" onClick={() => updateplayer(body._id)} fullWidth>
                      Update Player
                    </Button>
                  }
                </Grid>
              </Grid>
            </form>
          </CardContent>

        </CardContent>
      </Card>
    </Grid >
  );
};

export default FormPlayer;