import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
// import UploadButtons from './UploadButton';
import axios from 'axios';
import Axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { Image } from 'cloudinary-react'



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
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const countries = [

  { code: 'TN', label: 'Tunisia', phone: '216', suggested: true },

  { code: 'FR', label: 'France', phone: '33', },

  { code: 'QA', label: 'Qatar', phone: '974' },


];

const Form = (props) => {
  const classes = useStyles();
  let history = useHistory();
  // create state variables for each input

  const [body, setBody] = useState([]);
  const [imageSelected, setImageSelected] = useState("")
  const [url, setUrl] = useState()
  console.log("#url seted", url);

  useEffect(() => {
    setBody(props.dataForm)

  }, [props.dataForm]);

  const handleSubmit = e => {
    e.preventDefault();

  };
  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "kickwin")

    Axios.post("https://api.cloudinary.com/v1_1/amirsouayah/image/upload",
      formData
    ).then((res) => {
      // console.log(response.url);
      console.log('Match res', res.data)
      setImageSelected(res.data)
      console.log('#ImageSelected', imageSelected)
      console.log("#Setted", res.data.url)
      // console.log("#SetImaga", setImageSelected.url)
      const url1 = res.data.url
      setUrl(url1)
      setBody({ ...body, photo: url1 })


    })

  };

  const newTeam = () => {
    axios.post(`http://localhost:5000/team/create`, body)
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Team Created",
            text: "Thank you! Your Team has been successfully Created",
            icon: "success",
          }).then(function () {
            props.setOpen(false)
            window.location.reload();

          });

        }
      }).catch(err => {
      });
  }

  const updateteam = (id) => {
    axios.put(`http://localhost:5000/team/update/${id}`, body
      // { name: body.name, leader: body.leader, city: body.city, country: body.country}
    )
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Team Updated",
            text: "Thank you! Your Team has been successfully Updated",
            icon: "success",
          }).then(function () {
            props.setOpen(false)
            window.location.reload();
            props.getAllTeam()
          });
        }
      }).catch(err => {
      });
  }

  return (
    <Grid>
      <Card style={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <Typography variant='h1' align='center'>{props.sendData !== "update" ? "ADD NEW TEAM " : "UPDATE TEAM "} </Typography>

          <form className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={2} >
              <Grid xs={12} sm={12} item>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <div>
                    <input
                      type="file"
                      onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                      }}
                    />
                    <Button
                      onClick={uploadImage}> Upload</Button>
                    <Image
                      style={{ width: 200 }}
                      cloudName='amirsouayah'
                      publicId={imageSelected.url}
                      source={imageSelected}
                    />
                  </div>
                </label>
              </Grid>

              <Grid xs={12} sm={6} item >
                {props.sendData === 'create' ?
                  <TextField
                    label="Team Name"
                    fullWidth
                    variant='outlined'
                    placeholder="Team Name"
                    required
                    value={body && body.name}
                    onChange={(e) => setBody({ ...body, ...{ name: e.target.value } })}
                  /> :
                  <TextField
                    label="Team Name"
                    fullWidth
                    required
                    value={body && body.name}
                    onChange={(e) => setBody({ ...body, ...{ name: e.target.value } })}
                  />}
              </Grid>

              <Grid xs={12} sm={6} item>
                {props.sendData === 'create' ?
                  <TextField
                    label="Leader"
                    variant='outlined'
                    placeholder="Leader"
                    fullWidth
                    required
                    value={body && body.leader}
                    onChange={(e) => setBody({ ...body, ...{ leader: e.target.value } })}
                  />
                  :
                  <TextField
                    label="Leader"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    required
                    value={body && body.leader}
                    onChange={(e) => setBody({ ...body, ...{ leader: e.target.value } })}
                  />
                }
              </Grid>


              <Grid xs={12} sm={12} item>



                {props.sendData === 'create' ?
                  <select class="select" onChange={(e) => { setBody({ ...body, ...{ country: e.target.value } }) }} value={body && body.country} >
                    {countries.map((el, index) => {
                      return (
                        <option key={index} value={el.label}>{el.label}</option>
                      )
                    })
                    }
                  </select >

                  :
                  <TextField
                    label="Country"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    required
                    value={body && body.country}
                    onChange={(e) => setBody({ ...body, ...{ country: e.target.value } })}
                  />}


              </Grid>
              <Grid xs={12} sm={12} item>
                {props.sendData === 'create' ?
                  <TextField
                    label="City"
                    variant='outlined'
                    placeholder="City"
                    fullWidth
                    required
                    value={body && body.city}
                    onChange={(e) => setBody({ ...body, ...{ city: e.target.value } })}
                  /> :
                  <TextField
                    label="City"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    required
                    value={body && body.city}
                    onChange={(e) => setBody({ ...body, ...{ city: e.target.value } })}
                  />}
              </Grid>


              <Grid xs={12} sm={6} item  >
                <Button variant="contained" onClick={() => props.setOpen(false)} fullWidth>
                  Cancel
                </Button>
              </Grid>
              <Grid xs={12} sm={6} item >
                {props.sendData === 'create' ?
                  <Button type="submit" variant="contained" color="primary" onClick={() => newTeam()} fullWidth>
                    Add Team
                  </Button>
                  :
                  <Button type="submit" variant="contained" color="primary" onClick={() => updateteam(body._id)} fullWidth >
                    Update Team
                  </Button>
                }
              </Grid>




            </Grid>
          </form>

        </CardContent>
      </Card>
    </Grid >
  );
};

export default Form;