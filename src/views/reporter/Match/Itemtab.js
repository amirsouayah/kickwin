import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
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
// import axios from 'axios';

// @material-ui/icons components
// import MoreVert from "@material-ui/icons/MoreVert";
// import componentStyles from "assets/theme/views/admin/tables.js";

// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import IconButton from '@material-ui/core/IconButton';
// import Form from '../../Form/Form';
import Modal from '@material-ui/core/Modal';
// import Tooltip from '@material-ui/material/Tooltip';
// import Container from "@material-ui/core/Container";
// core components
import { useParams } from "react-router-dom";


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


  const { code } = useParams();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    // setData(props.res.data)
    // getmatchcode();
    console.log('Code dernier', props.item.code);

  }, []);

  // const getmatch = (id) => {
  //   setOpen(true)
  //   axios.get(`http://localhost:5000/match/search/${id}`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         //  setDatateam(res.data)
  //       }
  //     }).catch(err => {
  //     });
  // }
  // const getmatchcode = () => {
  //   setOpen(true)
  //   axios.get(`http://localhost:5000/match/find/${code}`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         setData(res.data)
  //         console.log('Code dernier', res.data);
  //       }
  //     }).catch(err => {
  //     });
  // }
  return (
    <>

      <TableRow onClick={() => history.push(`/reporter/Match/${props.item.code}`)}>
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
                {props.item.matchName}
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
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">
                {props.item.maxSlot}
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
            <Box display="flex" alignItems="flex-start">
              <Box fontSize=".875rem" component="span">
                [{props.item.date}]
              </Box>
              <Box fontSize=".875rem" component="span">
                ---Code : {props.item.code}
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
          {/* <Form sendData='update' /> */}
        </div>
      </Modal>
    </>
  );
}


export default Itemtab;