import React, { useState, useEffect } from 'react';
import { makeStyles, TextField, Typography } from '@material-ui/core';
import { Button, Grid, Card, CardContent } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import axios from 'axios';
import { useParams } from "react-router-dom";
import swal from 'sweetalert';

// import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";


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

const size = [
    { label: '' },
    { label: '6 Players V 6 Players' },
    { label: '7 Players V 7 Players' },
    { label: '8 Players V 8 Players' },
    { label: '9 Players V 9 Players' },
    { label: '10 Players V 10 Players' },
    { label: '11 Players V 11 Players' },

];

const NewMatchLeague = (props) => {
    const classes = useStyles();
    // create state variables for each input
    const { id } = useParams();
    const [datastadium, setDatastadium] = useState();
    const [teamOne, setTeamOne] = useState();
    const [teamTwo, setTeamTwo] = useState();
    const [datamatch, setDatamatch] = useState([]);
    const [body, setBody] = useState([]);


    useEffect(() => {
        // getAllMatchs()
        setDatamatch(props.dataTeam)
        getAllStadium()
        // console.log("infoMatch 22", props.infoMatch);
        if (props.sendData === 'update') {
            setBody({
                matchName: props.infoMatch.matchName,
                maxSlot: props.infoMatch.maxSlot,
                date: props.infoMatch.date,
                stadium: props.infoMatch.stadium[0]._id
            })
            setTeamOne(props.infoMatch.teams[0]._id);
            setTeamTwo(props.infoMatch.teams[1]._id);

        }

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
    };


    const newMatch = () => {

        axios.post(`http://localhost:5000/match/create`, {
            matchName: body.matchName, stadium: body.stadium,
            maxSlot: body.maxSlot, date: body.date, teams: [teamOne, teamTwo]
        })
            .then(res => {
                if (res.status === 200) {
                    console.log('Match res', res.data);
                    updateleague(res.data.Match._id, 'updateleague')
                    props.setOpen(false)
                }
            }).catch(err => {
            });
    }

    const updateleague = (idMatch, path) => {
        axios.put(`http://localhost:5000/league/${path}/${id}`, { matchs: [idMatch] })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            }).catch(err => {
            });
    }


    const updatematch = () => {
        axios.put(`http://localhost:5000/match/update/${props.idMatch}`, {
            matchName: body.matchName, stadium: body.stadium,
            maxSlot: body.maxSlot, date: body.date, teams: [teamOne, teamTwo]
        }
        )
            .then(res => {
                if (res.status === 200) {
                    // updateleague(props.idMatch, 'update')
                    swal({
                        title: "Match Updated",
                        text: "Thank you! Your Match has been successfully Updated",
                        icon: "success",
                    })
                    window.location.reload();
                }
            }).catch(err => {
                swal({
                    title: "Error",
                    text: "Thank you! Your Team has been successfully Updated",
                    icon: "error",
                })
            });
    }

    const getAllStadium = () => {
        axios.get(`http://localhost:5000/stadium/search`)
            .then(res => {
                if (res.status === 200) {
                    setDatastadium(res.data)
                }
            }).catch(err => {
            });
    }

    // if (props.infoMatch !== undefined) {
    //     console.log("infoMatch 22", props.infoMatch.matchName);
    //     // setBody(props.infoMatch)
    // }

    return (
        <Grid>
            <Card style={{ maxWidth: 800, padding: "100px 5px", margin: "0 auto" }}>
                <CardContent>
                    <Typography variant='h1' align='center'>{props.sendData === 'update' ? "UPDATE MATCH" : "ADD NEW MATCH"}  </Typography>
                    <form className={classes.root} onSubmit={handleSubmit}>
                        {/* <UploadButtons /> */}
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={12} item>
                                {props.sendData !== 'update' ?
                                    <TextField
                                        placeholder="Match Name" label="Match Name" variant="outlined" fullWidth required
                                        value={body && body.matchName}
                                        onChange={(e) => setBody({ ...body, ...{ matchName: e.target.value } })}
                                    /> :
                                    <TextField
                                        label="Match Name"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                        required
                                        value={body && body.matchName}
                                        onChange={(e) => setBody({ ...body, ...{ matchName: e.target.value } })}
                                    />
                                }
                            </Grid>

                            <Grid xs={12} sm={6} item>

                                <select class="select" onChange={(e) => { setBody({ ...body, ...{ maxSlot: e.target.value } }) }} value={body && body.maxSlot} required fullWidth>
                                    {size.map((el, index) => {
                                        return (
                                            <option key={index} value={el.label}>{el.label}</option>
                                        )
                                    })
                                    }
                                </select >
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    id="datetime-local"
                                    value={body && body.date}
                                    type="datetime-local"
                                    defaultValue="2022-07-07T07:07"
                                    fullWidth
                                    // className={classes.textField}
                                    onChange={(e) => setBody({ ...body, ...{ date: e.target.value } })}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>

                            <Grid xs={12} sm={6} item>
                                <InputLabel id="demo-simple-select-label">Team 1 </InputLabel>
                                <select style={{ width: '100%' }} value={teamOne} onChange={(e) => setTeamOne(e.target.value)}>
                                    <option value="none" selected disabled hidden>Select Team</option>
                                    {/* <option value={teamOne} ></option> */}
                                    {datamatch &&
                                        datamatch.map((element) => {
                                            return (<option value={element._id}>{element.name.toUpperCase()}</option>)
                                        }
                                        )
                                    }

                                </select>
                            </Grid>

                            {teamOne !== undefined &&
                                <Grid xs={12} sm={6} item>
                                    <InputLabel id="demo-simple-select-label">Team 2</InputLabel>
                                    <select style={{ width: '100%' }} value={teamTwo}
                                        onChange={(e) => setTeamTwo(e.target.value)}
                                    >
                                        <option value="none" selected disabled hidden>Select Team</option>

                                        {datamatch &&
                                            datamatch.map((element) => {
                                                return (
                                                    <>
                                                        {
                                                            element._id !== teamOne &&
                                                            <option value={element._id} className={`${element._id}`}>{element.name.toUpperCase()}</option>
                                                        }
                                                    </>

                                                )
                                            }
                                            )
                                        }

                                    </select>
                                </Grid>}
                            <Grid xs={12} sm={12} item align='center'>
                                <InputLabel id="demo-simple-select-label">Stadium</InputLabel>
                                <select style={{ width: '365px', margin: '16px' }} value={body && body.stadium} onChange={(e) => { setBody({ ...body, ...{ stadium: e.target.value } }) }} >
                                    <option value="none" selected disabled hidden>Select Stadium</option>
                                    {datastadium &&                            //  value={body && body.maxSlot} onChange={(e) => {setBody({ ...body, ...{ maxSlot: e.target.value } }) }} 
                                        datastadium.map((element) => {
                                            return (<option value={element._id} >{element.name.toUpperCase()}</option>)

                                        }
                                        )
                                    }

                                </select>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <Button variant="contained" onClick={() => props.setOpen(false)} fullWidth>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                {props.sendData !== "update" ?

                                    <Button type="submit" variant="contained" color="primary" onClick={() => newMatch()} fullWidth>
                                        Add Match
                                    </Button>
                                    : <Button type="submit" variant="contained" color="primary" onClick={() => updatematch()} fullWidth>
                                        update Match
                                    </Button>

                                }
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default NewMatchLeague;