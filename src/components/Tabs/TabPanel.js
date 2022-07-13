import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calendar from 'views/stadium/Calendar';
import { useParams } from "react-router-dom";

function TabPanel(props) {
  const [data, setData] = useState();
  const { children, value, index, ...other } = props;
  const { id } = useParams();
  useEffect(() => {

    getStadium();

  }, []);


  const getStadium = () => {
    setOpen(true)
    axios.get(`http://localhost:5000/stadium/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
          setData(res.data)
        }
      }).catch(err => {
      });
  }


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} xs={2} sm={6} />
          <Tab label="Item Two" {...a11yProps(1)} xs={2} sm={6} />
          <Tab label="Item Three" {...a11yProps(2)} xs={2} sm={6} />
          <Tab label="Item Four" {...a11yProps(3)} xs={2} sm={6} />
          <Tab label="Item Five" {...a11yProps(4)} xs={2} sm={6} />
          <Tab label="Item Six" {...a11yProps(5)} xs={2} sm={6} />
          <Tab label="Item Seven" {...a11yProps(6)} xs={2} sm={6} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Information
      </TabPanel>
      <TabPanel value={value} index={1}>
        Opening Prises
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Calendar}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Gallery
      </TabPanel>
      <TabPanel value={value} index={4}>
        Ratings
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}