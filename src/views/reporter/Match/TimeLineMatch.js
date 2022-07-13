import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons components
// import DirectionsRun from "@material-ui/icons/DirectionsRun";
// import EventNote from "@material-ui/icons/EventNote";
// import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import componentStyles from "assets/theme/components/navbar-dropdown.js";
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));



const useStyles1 = makeStyles(componentStyles);
export default function TimeLineMatch(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const [data, setData] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes1.menuTitle }}
      >
        Actions!
      </Typography>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Yellow Card</span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Red Card</span>
      </Box>
      <Divider component="div" classes={{ root: classes1.dividerRoot }} />
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={SportsSoccerOutlinedIcon}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Goal</span>
      </Box>
    </Menu>

  );


  useEffect(() => {

    setData(props.dataTeam[0])
    // console.log("#ALL DATA TIMELINE", props.dataTeam[0].players[0].name);
    console.log("#ALL DATA TIME LINE", props.dataTeam[0]);
    console.log("#ALL DATA",);

  }, []);

  return (
    <>
      {
        props.dataTeam[0] &&
        <Timeline align="alternate" style={{ backgroundColor: "transparent" }}>
          <TimelineItem>

            <TimelineOppositeContent style={{ justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" color="textSecondary" style={{ display: "flex", justifyContent: "center" }}>
                PLayers Team {props.dataTeam[0].name}
              </Typography>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <SportsSoccerIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" color="textSecondary" style={{ display: "flex", justifyContent: "center" }}>
                PLayers team : {props.dataTeam[1].name}
              </Typography>

            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                10:00 am
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      }
    </>
  );
}