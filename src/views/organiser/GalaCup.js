import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// import {   Bar } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
// import Modal from '../../components/AddButton/Modal'
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import LinearProgress from "@material-ui/core/LinearProgress";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// // @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";

// core components
import HeaderOrga from "components/Headers/HeaderOrga.js";

import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import { concat } from "lodash";
import RecipeReviewCard from "components/Card Match/CardMatch";

const useStyles = makeStyles(componentStyles);

function GalaCup(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  // const name = props.name;

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const day = (new Date().getDate());
  const year = (new Date().getFullYear());
  const month = (new Date().getMonth() + 1);

  const start_date = "10/12/2022"
  const end_date = "31/12/2022"
  const numOfTeams = 10;
  const name = "Gala Cup"
  const prize = "300"


  return (
    <>
      <HeaderOrga name={name} date={concat(day, '/', month, '/', year)} start={start_date} end={end_date} numOfTeams={numOfTeams} prize={prize} />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >

        <Grid item xl={12} lg={12} xs={12} >
          <RecipeReviewCard />
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

export default GalaCup;
