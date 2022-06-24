import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Itemtab from './Itemtab';
import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import HeaderOrga from "components/Headers/HeaderOrga.js";
// import Popup from "components/PopUp/Popup";
// import componentStyles from "assets/theme/views/admin/tables.js";
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import axios from 'axios';
// import SimpleModal from '../../AddButton/simple-modal.component';
// import Modals from '../../PopUp/Popup';
// import Button from "@material-ui/core/Button";

//
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import AddPlayer from '../../AddButton/AddPlayer'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";


// @material-ui/lab components


// @material-ui/icons components

import Itemtab from './Itemtab';

// core components
// import HeaderOrga from "components/Headers/HeaderOrga.js";

// import componentStyles from "assets/theme/views/admin/tables.js";



const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },

}));

const ListPlayers = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  // const queryParams = new URLSearchParams(window.location.search);
  // const [dataplayer, setDataplayer] = useState();




  const classes = useStyles();
  const theme = useTheme();
  // const [data, setdata] = React.useState([]);

  useEffect(() => {

    getAllPlayer();

  }, []);

  const getAllPlayer = () => {
    axios.get(`http://localhost:5000/team/search/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.players);
          setData(res.data.players)
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
                    Players
                  </Box>
                </Grid>
                <Grid item xs="auto">
                  <Box
                    justifyContent="center"
                    display="flex"
                    flexWrap="wrap"
                  >
                    <AddPlayer />
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
                    Player Name
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Position
                  </TableCell>

                  <TableCell
                    style={{ width: "10%" }}
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Actions
                  </TableCell>
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
                  return <Itemtab player={item} getAll={getAllPlayer} />
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

export default ListPlayers;