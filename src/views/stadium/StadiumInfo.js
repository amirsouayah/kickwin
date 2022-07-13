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
// import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

// import LinearProgress from "@material-ui/core/LinearProgress";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
// // @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import axios from 'axios';
// import swal from 'sweetalert';
import DeleteIcon from '@material-ui/icons/Delete';

// core components
import HeaderStadium from "components/Headers/HeaderStadium";
import MatchCard from "components/Card Match/MatchCard.js";

import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import AddNewTeam from "components/AddButton/AddNewTeam";
import AddNewMatch from "components/AddButton/AddNewMatch";
import { IconButton } from "@material-ui/core";
// import { Button } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

function StadiumInfo() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [data, setData] = useState();

  const { id } = useParams();
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  useEffect(() => {

    getDetailsStadium();

  }, []);

  const getDetailsStadium = () => {
    axios.get(`http://localhost:5000/stdaium/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          setData(res.data)
          // console.log("league ", res.data);
        }
      }).catch(err => {
      });
  }





  // console.log("teest", data.teams.length);
  return (
    <>
      {data && <HeaderStadium data={data[0]} />}
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >

        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={12}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
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
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Team Lists
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <AddNewTeam />
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>

              {data &&
                <TableContainer>
                  {data[0].teams.length > 0 &&
                    <Grid container spacing={6} className='contentMatch'>

                      {data[0].teams.map((element) => {
                        return (
                          <Grid item xs={3}>
                            <Box alignItems="center" display="flex">
                              <Box
                                component={Avatar}
                                marginRight="1rem"
                                alt="..."
                                src={"https://res.cloudinary.com/kefioubeid/image/upload/v1652812425/avatar/download_awpzru.png"}
                              />

                              <Box display="flex" alignItems="flex-start">
                                <Box fontSize=".875rem" component="span">
                                  {element.name}
                                </Box>
                              </Box>
                              <Box display="flex" alignItems="flex-start">

                                <IconButton aria-label="delete" onClick={() => removeTeam(element._id)}>
                                  <DeleteIcon fontSize="large" />
                                </IconButton>
                              </Box>
                            </Box>
                          </Grid>
                        )
                      })
                      }
                    </Grid>
                  }
                </TableContainer>
              }
            </Card>
          </Grid>

        </Grid>
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={12}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
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
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Matchs List
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        {data && <AddNewMatch dataTeam={data[0].teams} />}
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>

              {data &&
                <TableContainer>
                  {data[0].matchs.length > 0 &&
                    <Grid container spacing={2} className='contentMatch'>

                      {data[0].matchs.map((element) => {
                        return (
                          <Grid item >
                            <Card>

                              <MatchCard dataMatch={element} dataTeam={data[0].teams} />
                            </Card>
                          </Grid>
                        )
                      })
                      }
                    </Grid>
                  }
                </TableContainer>
              }
            </Card>
          </Grid>
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

export default StadiumInfo;
