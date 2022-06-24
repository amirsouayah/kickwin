import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Button, Grid, Card, CardContent} from '@material-ui/core';
import UploadButtons from './UploadButton';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));



const FormPlayer = ( props ) => {
  const classes = useStyles();
  // create state variables for each input

  const [body, setBody] = useState([]);


  useEffect(() => {
      setBody(props.dataForm)
    console.log(body);
  
  }, [props.dataForm]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, country, password);
    // handleClose();
  };


  const newPlayer = ()  =>{
    axios.post(`http://localhost:5000/player/create`, body)
    .then(res => {
      if (res.status === 200) {
        // setDatateam(res.data)
        props.setOpen(false)
        window.location.reload();
      }
    }).catch(err => {
  });
  }

  const updateplayer=(id)=> {
    axios.put(`http://localhost:5000/player/update/${id}`, body
    // { name: body.name, leader: body.leader, city: body.city, country: body.country}
    )
    .then(res => {
      if (res.status === 200) {
      props.setOpen(false)
      props.getAllPlayer()
      }
    }).catch(err => {
  });
 }

  return (
<Grid  >

  <Card style={{maxWidth:800, padding:"100px 5px", margin: "0 auto"}}>
    <CardContent>
    <Typography variant='h1' align='center'> ADD NEW PLAYER </Typography>
    <form className={classes.root} onSubmit={handleSubmit}>
      <UploadButtons/>
      <Grid >
      <TextField
        label="Player Name"
        variant="outlined"
        fullWidth
        required
        value={body && body.name}
        onChange={(e) => setBody({...body, ...{name : e.target.value}})}
      /></Grid>
      <Grid >
      <TextField
        label="Age"
        variant="outlined"
        required
        value={body && body.age}
        onChange={(e) => setBody({...body, ...{age : e.target.value}})}
      /></Grid>
      <TextField
        label="Phone"
        variant="outlined"
        required
        value={body && body.phone}
        onChange={(e) => setBody({...body, ...{phone : e.target.value}})}
      />
      <TextField
        label="Position dans le terrain"
        variant="outlined"
        required
        value={body && body.posInfo}
        onChange={(e) => setBody({...body, ...{posInfo : e.target.value}})}
      />
     
      <div>
        <Button variant="contained" onClick={()=>props.setOpen(false)}>
          Cancel
        </Button>
        {props.sendData === 'create' ?
         <Button type="submit" variant="contained" color="primary" onClick={()=>newPlayer()}>
         Add Player
       </Button>
        :
        <Button type="submit" variant="contained" color="primary" onClick={()=>updateplayer(body._id)}>
          Update 
        </Button>
        }
       
      </div>
    </form>
    
    </CardContent>
    </Card>  
    </Grid>
  );
};

export default FormPlayer;