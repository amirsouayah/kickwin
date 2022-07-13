import React, { useEffect, useState } from "react";
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
import componentStyles from "assets/theme/views/admin/dashboard.js";
import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";
import axios from "axios";

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  useEffect(() => {


    getDetailsLeague();


  }, []);



  const [data, setData] = useState();





  const getDetailsLeague = () => {
    axios.get(`http://localhost:5000/league/search/`)
      .then(res => {
        if (res.status === 200) {
          setData(res.data)
          // console.log("league ", res.data.length);
        }
      }).catch(err => {
      });
  }

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

          <Grid item xs={12} xl={12}>

            <Card classes={{ root: classes.cardRoot }} >
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray[600]}>

                  </Box>
                }
                subheader="Number of Teams in Competition"
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
                  <Table>
                    {data &&
                      data.map((element) => {
                        return (
                          <TableRow>
                            <TableCell align='center' style={{ width: '10%' }}>
                              {element.name}
                            </TableCell>
                            <TableCell align='center'>
                              <LinearProgress variant="determinate" value={element.teams.length} />
                            </TableCell>
                            <TableCell style={{ width: '10%' }}>
                              {element.teams.length} Teams
                            </TableCell>
                          </TableRow>)
                      })}


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
