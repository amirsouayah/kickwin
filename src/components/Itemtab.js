import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";

// import LinearProgress from "@material-ui/core/LinearProgress";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import swal from 'sweetalert';

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
// import AvatarGroup from "@material-ui/lab/AvatarGroup";
import axios from 'axios';
// @material-ui/icons components
// import MoreVert from "@material-ui/icons/MoreVert";
// import componentStyles from "assets/theme/views/admin/tables.js";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Form from './Form/Form';
import Modal from '@material-ui/core/Modal';
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

const Itemtab = (props) => {
  const history = useHistory();
  const [datateam, setDatateam] = useState();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);

  const removeteam = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    })
      .then(willDelete => {
        if (willDelete) {
          axios.delete(`http://localhost:5000/team/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                props.getAllTeam()
              }
            }).catch(err => {
            });
        }
      });

  }

  const getteam = (id) => {
    setOpen(true)
    axios.get(`http://localhost:5000/team/find/${id}`)
      .then(res => {
        if (res.status === 200) {
          //  console.log(res.data)
          setDatateam(res.data)
        }
      }).catch(err => {
      });
  }

  return (
    <>
      <TableRow onClick={() => history.push(`/organiser/players/${props.item._id}`)}>
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
              // src={require("assets/img/theme/bootstrap.jpg").default}
              src={props.item.photo}
            />
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span" width="50%">
                {props.item.name}
              </Box>
            </Box>
          </Box>
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }}>
          <Box display="flex" alignItems="flex-start">
            <Box fontSize=".875rem" component="span" >
              {props.item.leader}
            </Box>
          </Box>
          {/* <img src={props.item.photo}/> */}
        </TableCell>


        <TableCell
          style={{ width: "10%" }}
          classes={{ root: classes.tableCellRoot }}>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon onClick={() => getteam(props.item._id)} />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }} >
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon onClick={() => removeteam(props.item._id)} />
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
        <div className={classes.paper}>
          <Form sendData='update' dataForm={datateam} setOpen={setOpen} getAllTeam={props.getAllTeam} />
        </div>
      </Modal>
    </>
  );
}


export default Itemtab;