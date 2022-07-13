import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

// import NewMatchLeague from "components/Form/NewMatchLeague";
import { IconButton } from "@material-ui/core";
import FormMatch from "./FormMatch";
function getModalStyle() {
    const top = 41
    const left = 57
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
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        // height: '96%',

    },
}));
export default function NewScoreMatch(props) {
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


            <IconButton aria-label="edit" onClick={() => getmatch(props.idMatch)}>
                <EditIcon fontSize="large" />
            </IconButton>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {infoMatch &&
                        <FormMatch
                            sendData={props.sendData}
                            dataTeam={props.dataTeam}
                            infoMatch={infoMatch}
                            idMatch={props.idMatch}
                            setOpen={setOpen} />}
                </div>
            </Modal>
        </div>
    );
}