import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";

// import LinearProgress from "@material-ui/core/LinearProgress";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
// import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
// import AvatarGroup from "@material-ui/lab/AvatarGroup";
import axios from 'axios';

// @material-ui/icons components
// import MoreVert from "@material-ui/icons/MoreVert";
// import componentStyles from "assets/theme/views/admin/tables.js";

// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import IconButton from '@material-ui/core/IconButton';
import Form from '../../Form/FormMatch';
import Modal from '@material-ui/core/Modal';
// import Stadium from 'layouts/Stadium';
// import Tooltip from '@material-ui/material/Tooltip';
// import Container from "@material-ui/core/Container";
// core components



const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },
}));

const Itemtab = ({ item, teams }) => {


  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
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
    paper: {
      position: 'absolute',
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const getmatch = (id) => {
    setOpen(true)
    axios.get(`http://localhost:5000/match/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          //  setDatateam(res.data)
        }
      }).catch(err => {
      });
  }



  return (
    <>
      <TableRow>
        <TableCell
          classes={{
            root:
              classes.tableCellRoot +
              " " +
              classes.tableCellRootBodyHead,
          }}
          component="th"
          variant="head"
          scope="row"
        >
          <Box alignItems="center" display="flex">
            <Box
              component={Avatar}
              marginRight="1rem"
              alt="..."
              src={require("assets/img/theme/bootstrap.jpg").default}
            />
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">
                {item.matchName}
              </Box>
            </Box>
          </Box>
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }}>
          {item.maxSlot}
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }}>
          {item.date}
        </TableCell>
        <TableCell
          classes={{
            root:
              classes.tableCellRoot +
              " " +
              classes.tableCellRootBodyHead,
          }}
          component="th"
          variant="head"
          scope="row"
        >
          <Box alignItems="center" display="flex">
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">
                {
                  teams.map(team => (
                  <p>{team.name}</p>
                 
                  ))
                }
              </Box>
            </Box>
          </Box>
        </TableCell>

      </TableRow>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <Form sendData='update' />
        </div>
      </Modal>
    </>
  )
}


export default Itemtab;