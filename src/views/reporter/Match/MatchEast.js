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
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";

import { useParams } from "react-router-dom";

import axios from 'axios';



import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import HeaderReporter from "../../../components/Headers/HeaderReporter";
// import MatchCard from "./MatchCard";

// import MatchCard from "../../../components/Card Match/MatchCard.js";
// import AddNewTeam from "../../../components/AddButton/AddNewTeam";
// import AddNewMatch from "../../../components/AddButton/AddNewMatch";
// import { IconButton } from "@material-ui/core";
// import { Button } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

function MatchEast() {
  const classes = useStyles();

  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [data, setData] = useState();

  const { code } = useParams();

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  useEffect(() => {

    getDetailsMatch();

  }, []);

  const getDetailsMatch = () => {
    axios.get(`http://localhost:5000/match/find/${code}`)
      .then(res => {
        if (res.status === 200) {
          setData(res.data)
          console.log("#Code Trouvé");
        } else if (res.status !== 200) {
          console.log("#Code non Trouvé");
        }
      }).catch(err => {
      });
  }




  // console.log("teest", data.teams.length);
  return (
    <>
      {data && <HeaderReporter data={data} />}
      {/* {data && <MatchCard data={data} />} */}
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >

        <style>
          {`
          .MuiLinearProgress-barColorPrimary {
            background-color: #f5365c;
          }
          .makeStyles-containerRoot-2 {
            padding-left: 0px;
            padding-right: 2%;
            margin-top: 0px;
          }
          `}
        </style>
      </Container>
    </>
  );
}

export default MatchEast;
