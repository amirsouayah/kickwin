import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
import UploadButtons from './UploadButton';
import axios from 'axios';
import { useParams } from "react-router-dom";
import swal from 'sweetalert';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
  },
}));



const Form = (props) => {
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


  const newMatch = () => {
    axios.post(`http://localhost:5000/match/create`, body)
      .then(res => {
        if (res.status === 200) {
          // setDatateam(res.data)
          swal({
            title: "Match Created",
            text: "Thank you! Your Match has been successfully Updated",
            icon: "success",
          }).then(function () {
            updateleague(res.data.match._id);
          });
          // props.setOpen(false)
          // window.location.reload();
        }
      }).catch(err => {
      });
  }


  const updateleague = (idMatch) => {
    axios.put(`http://localhost:5000/league/updateleague/${id}`, { matchs: [idMatch] }
      // { name: body.name, leader: body.leader, city: body.city, country: body.country}
    )
      .then(res => {
        if (res.status === 200) {
          props.setOpen(false)
          window.location.reload();
          // props.getAllLeague()
        }
      }).catch(err => {
      });
  }


  const updatematch = (id) => {
    axios.put(`http://localhost:5000/match/update/${id}`, body
      // { name: body.name, leader: body.leader, city: body.city, country: body.country}
    )
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Match Updated",
            text: "Thank you! Your Match has been successfully Updated",
            icon: "success",
          }).then(function () {
            props.setOpen(false)
            window.location.reload();
            props.getAllMatch()

          });

        }
      }).catch(err => {
      });
  }

  return (
    <Grid  >

      <Card style={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <Typography variant='h1' align='center'> ADD NEW Match </Typography>
          <form className={classes.root} onSubmit={handleSubmit}>
            <UploadButtons />
            <Grid >
              <TextField
                label="Match Name"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
                value={body && body.matchName}
                onChange={(e) => setBody({ ...body, ...{ matchName: e.target.value } })}
              /></Grid>
            <Grid >
              <TextField
                label="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                value={body && body.date}
                onChange={(e) => setBody({ ...body, ...{ date: e.target.value } })}
              /></Grid>


            <div>
              <Button variant="contained" onClick={() => props.setOpen(false)}>
                Cancel
              </Button>
              {props.sendData === 'create' ?
                <Button type="submit" variant="contained" color="primary" onClick={() => newMatch()}>
                  Add Match
                </Button>
                :
                <Button type="submit" variant="contained" color="primary" onClick={() => updatematch(body._id)}>
                  update Match
                </Button>
              }

            </div>
          </form>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default Form;