import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
// import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import MatchCard from './../../views/reporter/Match/MatchCard'

// // core components
// import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/headerReporter";
import pic from "../../assets/images/yellow.png";
import CustomizedTimeline from "views/reporter/Match/TimeLine";

const useStyles = makeStyles(componentStyles);


const HeaderReporter = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setData] = useState();
  const [dataPlayers, setDataPlayers] = useState();

  useEffect(() => {

    setData(props.data[0])
    // setData(props.data[0].teams[0].players[0])

    console.log("Data Time", props.data[0].teams[0].players[0].name);

  }, []);
  return (
    <>
      {props.data &&
        <div className={classes.header} >
          <Container
            maxWidth={true}
            style={{ marginTop: '0rem', paddingLeft: ' 15px', paddingRight: '15px' }}
            classes={{ root: classes.containerRoot }}
            s
          >
            <div >
              <TableContainer style={{ color: "white" }}>
                <Grid container xs={12} spacing={5} className='contentMatch'>

                  <Card style={{ background: 'transparent', color: "white", width: "200px", alignItems: "center", backgroundColor: "#341a5285" }} >
                    <h6 className="h6">Match Name</h6>
                    <h1 className="h1">{props.data[0].matchName.toUpperCase()}</h1>
                  </Card>

                </Grid>
                <Grid container spacing={10} className='contentMatch'>
                  <Grid item >
                    <Card style={{ background: 'transparent', color: "white", backgroundColor: "#341a5285" }}>
                      {data && <MatchCard dataMatch={data} dataTeam={data.teams} />}

                    </Card>
                  </Grid>

                </Grid>
                <Grid container spacing={12} className='contentMatch'>
                  <Grid item style={{ width: '70%', margin: '16px' }} >
                    <Card style={{ background: 'transparent', color: "white" }} >
                      {data && <CustomizedTimeline dataTeam={data.teams} />}
                    </Card>
                  </Grid>

                </Grid>
              </TableContainer>
            </div>
          </Container>
          <style>
            {`
          .makeStyles-header-100{
            background-image: url('${pic}');
            background: linear-gradient(87deg,#341A52,#1171ef);
            background-repeat: no-repeat;
            background-size: cover;
          },
          .makeStyles-containerRoot-2 {
            padding-left: 0px;
            padding-right: 0px;
          }

          `}
          </style>
        </div>
      }
    </>
  );
};

export default HeaderReporter;
