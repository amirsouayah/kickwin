import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
// import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteOutlined } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
// import Form from '../../Form/Form';
import Modal from '@material-ui/core/Modal';
import FormPlayer from 'components/Form/FormPlayer';

// core components



// import Container from "@material-ui/core/Container";



// @material-ui/icons components


const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },
}));


const Itemtab = (props) => {
  // function rand() {
  //   return Math.round(Math.random() * 20) - 10;
  // }
  // function getModalStyle() {
  //   const top = 50 + rand();
  //   const left = 50 + rand();
  //   return {
  //       top: `${top}%`,
  //       left: `${left}%`,
  //       transform: `translate(-${top}%, -${left}%)`,
  //   };
  // }
  const [open, setOpen] = React.useState(false);
  const [dataplayer, setDataplayer] = useState();
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);

  const removeplayer = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    })
      .then(willDelete => {
        if (willDelete) {
          axios.delete(`http://localhost:5000/player/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                props.getAllPlayer()
              }
            }).catch(err => {
            });
        }
      });

  }

  const getplayer = (id) => {
    setOpen(true)
    axios.get(`http://localhost:5000/playergetplayer/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          //  console.log(res.data)
          setDataplayer(res.data)
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
                {props.player.name}
              </Box>
            </Box>
          </Box>
        </TableCell>
        <TableCell classes={{ root: classes.tableCellRoot }}>
          {props.player.posInfo}
        </TableCell>


        <TableCell
          style={{ width: "10%" }}
          classes={{ root: classes.tableCellRoot }}>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon onClick={() => getplayer(props.player._id)} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlined onClick={() => removeplayer(props.player._id)} />
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
          <FormPlayer sendData='update' dataForm={dataplayer} setOpen={setOpen} getAllPlayer={props.getAllPlayer} />
        </div>
      </Modal>
    </>
  );
}


export default Itemtab;