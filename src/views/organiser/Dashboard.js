import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// import {   Bar } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// // @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";

// core components
import HeaderOrga from "components/Headers/HeaderOrgaDash";

import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <HeaderOrga />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          {/* <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootBgGradient,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color={theme.palette.gray[400]}>
                          Overview
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color={theme.palette.white.main}>
                          Total Feeds
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          component={Box}
                          marginRight="1rem!important"
                          onClick={() => toggleNavs(1)}
                          classes={{
                            root:
                              activeNav === 1
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Month
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => toggleNavs(2)}
                          classes={{
                            root:
                              activeNav === 2
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Week
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid> */}
          <Grid item xs={12} xl={12}>
          
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray[600]}>
                    
                  </Box>
                }
                subheader="Number of Goals in tournements"
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  {/* <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  /> */}
                  <Table>
                  <TableRow>
                    <TableCell align='center' style={{width: '10%'}}>
                      League EAST
                    </TableCell>
                    <TableCell align='center'>
                      <LinearProgress variant="determinate" value={25}/>
                    </TableCell>
                    <TableCell style={{width: '10%'}}>
                      25%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center' style={{width: '10%'}}>
                      Gala Cup
                    </TableCell>
                    <TableCell align='center'>
                      <LinearProgress variant="determinate" value={13}/>
                    </TableCell>
                    <TableCell style={{width: '10%'}}>
                      13%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center' style={{width: '10%'}}>
                      Ref Chompions
                    </TableCell>
                    <TableCell align='center'>
                      <LinearProgress variant="determinate" value={70}/>
                    </TableCell>
                    <TableCell style={{width: '10%'}}>
                      70%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center' style={{width: '10%'}}>
                      URT League
                    </TableCell>
                    <TableCell align='center'>
                      <LinearProgress variant="determinate" value={60}/>
                    </TableCell>
                    <TableCell style={{width: '10%'}}>
                      60%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center' style={{width: '10%'}}>
                      FCR competition
                    </TableCell>
                    <TableCell align='center'>
                      <LinearProgress variant="determinate" value={40}/>
                    </TableCell>
                    <TableCell style={{width: '10%'}}>
                      40%
                    </TableCell>
                  </TableRow>
                  </Table>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginTop="3rem">
          
        </Grid>
        <style>
          {`
          .MuiLinearProgress-barColorPrimary {
            background-color: #f5365c;
          }
          `}
        </style>
      </Container>
    </>
  );
}

export default Dashboard;
