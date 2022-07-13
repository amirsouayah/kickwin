import React, { useState, useEffect } from 'react';
import { makeStyles, MenuItem, Select, Typography } from '@material-ui/core';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
// import UploadButtons from './UploadButton';
import axios from 'axios';
import { useParams } from "react-router-dom";


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
        '& MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input': {
            margin: theme.spacing(2),
            width: '300px',
        },
    },
}));



const NewTeamLeague = (props) => {
    const classes = useStyles();
    // create state variables for each input
    const { id } = useParams();

    const [datateam, setDatateam] = useState([]);
    const [body, setBody] = useState([]);


    useEffect(() => {
        getAllTeams()

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
    };


    const newTeam = () => {
        axios.put(`http://localhost:5000/league/updateleague/${id}`, { teams: [body] })
            .then(res => {
                if (res.status === 200) {
                    // setDatateam(res.data)
                    console.log('Team Name', body);
                    props.setOpen(false)
                    window.location.reload();
                }
            }).catch(err => {
            });
    }

    const getAllTeams = () => {
        axios.get(`http://localhost:5000/team/search`)
            .then(res => {
                if (res.status === 200) {
                    setDatateam(res.data)
                    console.log(res.data);
                }
            }).catch(err => {
            });
    }


    return (
        <Grid>
            <Card style={{ maxWidth: 800, margin: "0 auto" }}>
                <CardContent>
                    <Typography variant='h1' align='center'> ADD NEW TEAM IN LEAGUE </Typography>
                    <form className={classes.root} onSubmit={handleSubmit}>
                        {/* <UploadButtons /> */}
                        <Grid >
                            {/* <Select onChange={(e) => setBody({ ...body, ...{ teams: [e.target.value] } })}> */}
                            <Select style={{ width: '365px', margin: '16px' }} onChange={(e) => setBody(e.target.value)}>

                                {datateam &&
                                    datateam.map((element) => {
                                        return (<MenuItem value={element._id} >{element.name.toUpperCase()}</MenuItem>)
                                    }
                                    )
                                }

                            </Select>
                        </Grid>
                        <div>
                            <Button variant="contained" onClick={() => props.setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary" onClick={() => newTeam()}>
                                Add Team
                            </Button>


                        </div>
                    </form>

                </CardContent>
            </Card>
        </Grid >
    );
};

export default NewTeamLeague;