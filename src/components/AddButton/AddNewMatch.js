import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
// import FormPlayer from '../Form/FormPlayer';
// import Form from "components/Form/FormLeague";
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

import NewMatchLeague from "components/Form/NewMatchLeague";
import { IconButton } from "@material-ui/core";
function getModalStyle() {
    const top = 50
    const left = 50
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: '#f5365c'
    },
    paper: {
        position: 'absolute',
        backgroundColor: '#1a0d2952',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // height: '96%',
        width: ' 70%'

    },
}));
export default function AddNewMatch(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [infoMatch, setInfoMatch] = useState();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const getmatch = (matchId) => {
        handleOpen()
        axios.get(`http://localhost:5000/match/search/${matchId}`)
            .then(res => {
                if (res.status === 200) {
                    setInfoMatch(res.data[0])
                }
            }).catch(err => {
            });
    }

    return (
        <div>

            {props.sendData === 'update' ?
                <IconButton aria-label="edit" onClick={() => getmatch(props.idMatch)}>
                    <EditIcon fontSize="large" />
                </IconButton>
                : <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleOpen}
                >
                    ADD MATCHS
                </Button>
            }
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {props.sendData === 'create' &&
                        <NewMatchLeague
                            sendData={props.sendData}
                            dataTeam={props.dataTeam}
                            infoMatch={infoMatch}
                            setOpen={setOpen} />
                    }
                    {(props.sendData === 'update' && infoMatch) &&
                        <NewMatchLeague
                            sendData={props.sendData}
                            dataTeam={props.dataTeam}
                            infoMatch={infoMatch}
                            idMatch={props.idMatch}
                            setOpen={setOpen} />
                    }
                </div>
            </Modal>
        </div>
    );
}