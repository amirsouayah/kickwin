import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calendar from 'views/stadium/Calendar';
import Header from 'components/Headers/HeaderOrga';
import SimpleRating from 'components/Rating/Rating';
// import SingleLineImageList from 'components/ImageList/SingleLineImageList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Information" {...a11yProps(0)} style={{width : "10%"}} />
          <Tab label="Opening Prises" {...a11yProps(1)} style={{width : "10%"}}/>
          <Tab label="Schedule" {...a11yProps(2)} style={{width : "10%"}}/>
          <Tab label="Gallery" {...a11yProps(3)} style={{width : "10%"}}/>
          <Tab label="Ratings" {...a11yProps(4)} style={{width : "10%"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <Header />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Calendar />
      </TabPanel>
      <TabPanel value={value} index={3}>
      {/* <SingleLineImageList/> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
       <SimpleRating/>
      </TabPanel>
    </div>
  );
}