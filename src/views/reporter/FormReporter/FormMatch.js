import React, { useState, useEffect } from 'react';
import { makeStyles, TextField, Typography } from '@material-ui/core';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import { useParams } from "react-router-dom";
import swal from 'sweetalert';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    textField: {
      width: '25ch',
    },
  },
}));



const FormMatch = (props) => {
  const classes = useStyles();
  // create state variables for each input
  const { id } = useParams();
  const [body, setBody] = useState([]);


  useEffect(() => {
    // getAllMatchs()
    // getAllStadium()
    if (props.sendData === 'update') {
      setBody({
        scoreTeam1: props.infoMatch.scoreTeam1, scoreTeam2: props.infoMatch.scoreTeam2
      })

    }

  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };


  const updatematch = () => {
    axios.put(`http://localhost:5000/match/update/${props.idMatch}`, {
      scoreTeam1: body.scoreTeam1, scoreTeam2: body.scoreTeam2
    }
    )
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Score Updated",
            text: "Thank you! Your Match has been successfully Updated",
            icon: "success",
          }).then(function () {
            window.location.reload();
            props.setOpen(false)
          });
        }
      }).catch(err => {
      });
  }



  return (
    <Grid>
      <Card style={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <Typography variant='h1' align='center'> UPDATE SCORE MATCH  </Typography>
          <form className={classes.root} onSubmit={handleSubmit}>
            {/* <UploadButtons /> */}
            <Grid >
              <div>
                <TextField
                  label="Score team one"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  value={body && body.scoreTeam1}
                  onChange={(e) => setBody({ ...body, ...{ scoreTeam1: e.target.value } })}
                />
                <TextField
                  label="Score team two"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  value={body && body.scoreTeam2}
                  onChange={(e) => setBody({ ...body, ...{ scoreTeam2: e.target.value } })}
                />
              </div>
            </Grid>
            <div>
              <Button variant="contained" onClick={() => props.setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={() => updatematch()}>
                Update Score
              </Button>



            </div>
          </form>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormMatch;