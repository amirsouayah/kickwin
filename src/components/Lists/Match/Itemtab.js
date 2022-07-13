import React, { useState } from 'react';

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
import { useParams } from "react-router-dom";

import { DeleteOutlined } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Form from '../../Form/FormMatch';
import Modal from '@material-ui/core/Modal';
import swal from 'sweetalert';
// import Stadium from 'layouts/Stadium';
import Tooltip from "@material-ui/core/Tooltip";

// import Container from "@material-ui/core/Container";
// core components


function getModalStyle() {
  const top = 50
  const left = 50
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({

  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // height: '96%',

  },
}));

const Itemtab = (props) => {


  const [datamatch, setDatamatch] = useState();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { id } = useParams();

  const removematch = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this Match?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    })
      .then(willDelete => {
        if (willDelete) {
          axios.delete(`http://localhost:5000/match/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                props.getAllMatch()
                window.location.reload()
              }
            }).catch(err => {
            });
        }
      });

  }

  const getmatch = (id) => {
    setOpen(true)
    axios.get(`http://localhost:5000/match/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          setDatamatch(res.data)
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
              src={props.match.teams[0].photo}
            />
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">
                {props.match.teams[0].name}
              </Box>
            </Box>
          </Box>
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
            <Box
              component={Avatar}
              marginRight="1rem"
              alt="..."
              src={props.match.teams[1].photo}
            />
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">

                {props.match.teams[1].name}
              </Box>
            </Box>
          </Box>
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }}>
          {props.match.date}
        </TableCell>


        <TableCell
          style={{ width: "10%" }}
          classes={{ root: classes.tableCellRoot }}>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon onClick={() => getmatch(props.match._id)} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlined onClick={() => removematch(props.match._id)} />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <Form sendData='update' dataForm={datamatch} setOpen={setOpen} getAllMatch={props.getAllMatch} />
        </div>
      </Modal>
    </>
  )
}


export default Itemtab;