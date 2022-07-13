import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";
import pic from "../../assets/images/yellow.png";
import componentStyles from "assets/theme/components/header.js";
// import axios from "axios";
// import RecipeReviewCard from "components/Card Match/CardMatch";
// import CardMatch from "components/Card Match/CardMatch";

const useStyles = makeStyles(componentStyles);

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  // const [dataleague, setDataleague] = useState();
  // const [data, setData] = useState();


  // useEffect(() => {


  //   getDetailsLeague();


  // }, []);


  // const getDetailsLeague = () => {
  //   axios.get(`http://localhost:5000/league/search/`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         setData(res.data)
  //         // console.log("league ", res.data.length);
  //       }
  //     }).catch(err => {
  //     });
  // }



  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              {/* <Grid item xl={12} lg={12} xs={12}>
                <RecipeReviewCard />
              </Grid> */}
              <Grid item xl={3} lg={6} xs={12}>
                {/* <RecipeReviewCard /> */}
                <CardStats
                  subtitle="Total des Competitions"
                  title=""
                  icon={InsertChartOutlined}
                  // color="bgError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
                {/* <CardMatch/> */}
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="New users"
                  title="2,356"
                  icon={PieChart}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Sales"
                  title="924"
                  icon={GroupAdd}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Performance"
                  title="49,65%"
                  icon={EmojiEvents}
                  color="bgInfo"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
        <style>
          {`
          .MuiCardContent-root .makeStyles-cardContentRoot-91{
            background-image: url('${pic}');
            background-repeat: no-repeat;
            background-size: cover;
          }

          `}
        </style>
      </div>
    </>
  );
};

export default Header;
