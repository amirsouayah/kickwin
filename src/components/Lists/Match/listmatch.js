
import React, { useEffect, useState } from 'react';

import Container from "@material-ui/core/Container";

import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import Itemtab from './Itemtab';


const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },

}));

const ListMatchs = () => {

  // const { id } = useParams();
  const [data, setData] = useState([]);
  // const queryParams = new URLSearchParams(window.location.search);
  // const [dataplayer, setDataplayer] = useState();

  const classes = useStyles();
  const theme = useTheme();
  // const [data, setdata] = React.useState([]);

  useEffect(() => {

    getAllMatch();

  }, []);

  const getAllMatch = () => {
    axios.get(`http://localhost:5000/match/search/`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data)
        }
      }).catch(err => {
      });
  }
  return (
    <>
      {/* <HeaderOrga /> */}
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="1rem"
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
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
                    Matchs
                  </Box>
                </Grid>
                <Grid item xs="auto">
                  <Box
                    justifyContent="center"
                    display="flex"
                    flexWrap="wrap"
                  >
                    {/* <AddMatch /> */}
                  </Box>
                </Grid>
              </Grid>
            }
            classes={{ root: classes.cardHeaderRoot }}
          ></CardHeader>

          <TableContainer>
            <Box
              component={Table}
              alignItems="center"
              marginBottom="0!important"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Team 1
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Team 2
                  </TableCell>

                  <TableCell
                    style={{ width: "10%" }}
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  ></TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => {
                  return <Itemtab match={item} getAll={getAllMatch} />
                })
                }

              </TableBody>
            </Box>
          </TableContainer>

        </Card>
      </Container>
    </>


  );
};

export default ListMatchs;