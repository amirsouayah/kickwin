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
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
  },
}));



const FormStadium = ( props ) => {
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


  const newStadium = ()  =>{
    axios.post(`http://localhost:5000/stadium/create`, body)
    .then(res => {
      if (res.status === 200) {
        // setDatateam(res.data)
        
        props.setOpen(false)
        window.location.reload();
      }
    }).catch(err => {
  });
  }

  const updatestadium=(id)=> {
    axios.put(`http://localhost:5000/stadium/update/${id}`, body
    // { name: body.name, leader: body.leader, city: body.city, country: body.country}
    )
    .then(res => {
      if (res.status === 200) {
      props.setOpen(false) 
      props.getAllStadium() 
      }
    }).catch(err => {
  });
 }

  return (
<Grid  >

  <Card style={{maxWidth:800, padding:"100px 5px", margin: "0 auto"}}>
    <CardContent>
    <Typography variant='h1' align='center'> ADD NEW Stadium </Typography>
    <form className={classes.root} onSubmit={handleSubmit}>
      <UploadButtons/>
      <Grid >
      <TextField
        label="Stadium Name"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        required
        value={body && body.name}
        onChange={(e) => setBody({...body, ...{name : e.target.value}})}
      /></Grid>
      <Grid >
      <TextField
        label="City"
        InputLabelProps={{
          shrink: true,
        }}
        required
        value={body && body.city}
        onChange={(e) => setBody({...body, ...{city : e.target.value}})}
      /></Grid>
      <TextField
        label="Country"
        InputLabelProps={{
          shrink: true,
        }}
        required
        value={body && body.country}
        onChange={(e) => setBody({...body, ...{country : e.target.value}})}
      />
      <TextField
        label="Size"
        InputLabelProps={{
          shrink: true,
        }}
        required
        value={body && body.size}
        onChange={(e) => setBody({...body, ...{size : e.target.value}})}
      />
     
      <div>
        <Button variant="contained" onClick={()=>props.setOpen(false)}>
          Cancel
        </Button>
        {props.sendData === 'create' ?
         <Button type="submit" variant="contained" color="primary" onClick={()=>newStadium()}>
         Add Stadium
       </Button>
        :
        <Button type="submit" variant="contained" color="primary" onClick={()=>updatestadium(body._id)}>
          update Stadium
        </Button>
        }
       
      </div>
    </form>
    
    </CardContent>
    </Card>  
    </Grid>
  );
};

export default FormStadium;