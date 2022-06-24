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
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import axios from 'axios';

// @material-ui/icons components
// import MoreVert from "@material-ui/icons/MoreVert";
import componentStyles from "assets/theme/views/admin/tables.js";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Form from './Form/Form';
import Modal from '@material-ui/core/Modal';
// import Tooltip from '@material-ui/material/Tooltip';
import Container from "@material-ui/core/Container";
// core components



const useStyles = makeStyles(componentStyles);

const Itemtab = (props) => {


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
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }));
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const getteam=(id)=> {
     setOpen(true)
     axios.get(`http://localhost:5000/team/search/${id}`)
     .then(res => {
       if (res.status === 200) {
        //  setDatateam(res.data)
       }
     }).catch(err => {
   });
  }

        return (
            <>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
            <Container
        maxWidth={false}
        component={Box}
        marginTop="1rem"
        classes={{ root: classes.containerRoot }}
      >
        
             <TableRow display='flex' alignContent="space-around">
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
                    {/* {props.item.captain} */}
                    {/* <img src={props.item.photo}/> */}
                    
                  </TableCell>
                  
                  {/* <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      pending
                    </Box>
                  </TableCell> */}
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  {/* <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        60%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={60}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientError,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell> */}
                  {/* <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-1"
                      aria-haspopup="true"
                    //   onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        // color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-1"
                    //   anchorEl={anchorEl1}
                      keepMounted
                    //   open={Boolean(anchorEl1)}
                      
                    >
                      <MenuItem >Action</MenuItem>
                      <MenuItem >Another action</MenuItem>
                      <MenuItem >
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell> */}
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                      <Tooltip title="Edit">
                      <IconButton>
                        <EditIcon  onClick={()=>getteam(props.item._id)}/>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                      <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
                </Container>  
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={()=>setOpen(false)}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <Form sendData='update'/>
                    </div>
                </Modal> 
            </>
        );
    }


export default Itemtab;