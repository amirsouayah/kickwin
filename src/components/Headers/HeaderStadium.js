import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// // core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";
import pic from "../../assets/images/yellow.png";
import GoogleMap from "views/organiser/GoogleMap";
// import Maps from "views/admin/Maps";

const useStyles = makeStyles(componentStyles);

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {props.data &&
        <div className={classes.header}>
          <Container
            maxWidth={true}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <div>
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} xs={12} className="nbUntreated ">
                  <CardStats
                    subtitle="Name Stadium"
                    title={props.data.name.toUpperCase()}
                    icon={EmojiEvents}
                    color="bgInfo"

                    footer={
                      <>

                        {/* <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box> */}
                      </>
                    }
                  />
                </Grid>
                <Grid item xl={3} lg={6} xs={12} >
                  <CardStats


                    title={props.data.country.toUpperCase()}
                    subtitle="Country"
                    icon={InsertChartOutlined}
                    color="bgError"
                    backgroundColor="red"
                    footer={
                      <>

                      </>
                    }
                  />
                </Grid>
                <Grid item xl={3} lg={6} xs={12}>
                  <CardStats
                    subtitle="City"
                    title={props.data.city}
                    icon={InsertChartOutlined}
                    color="bgError"
                    footer={
                      <>
                        {/* <Box
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
                      </Box> */}
                      </>
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} xs={12}>
                  <CardStats
                    subtitle="Last Registration Date"
                    title={props.data.address.toUpperCase()}
                    icon={EmojiEvents}
                    color="bgInfo"
                    footer={
                      <>
                        {/*                       
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box> */}
                      </>
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} xs={12}>
                  <CardStats
                    subtitle="Size"
                    title={props.data.size.toUpperCase()}
                    icon={PieChart}
                    color="bgWarning"
                    footer={
                      <>
                        {/* <Box
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
                      </Box> */}
                      </>
                    }
                  />
                </Grid>
                <Grid item xl={12} lg={6} xs={12}>
                  <GoogleMap lat={props.data.lattitude} long={props.data.longitude} />
                </Grid>


              </Grid>
            </div>
          </Container>
          <style>
            {`
          .nbUntreated .makeStyles-cardRoot-84{
            background-image: url('${pic}');
            background-repeat: no-repeat;
            background-size: cover;
          }

          `}
          </style>
        </div>
      }
    </>
  );
};

export default Header;
