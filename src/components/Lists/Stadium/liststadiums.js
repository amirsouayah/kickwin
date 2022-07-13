import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Itemtab from '../Stadium/Itemtab';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import HeaderOrga from "components/Headers/HeaderOrga.js";
// import Popup from "components/PopUp/Popup";
// import componentStyles from "assets/theme/views/admin/tables.js";
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
// import SimpleModal from '../../AddButton/simple-modal.component';
// import Modals from './PopUp/Modal';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
// import { Paper } from '@material-ui/core';
import TableBody from "@material-ui/core/TableBody";
import { useHistory } from 'react-router-dom';





const useStyles = makeStyles((theme) => ({

  paper: {
    position: 'absolute',
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const List = (props) => {
  const classes = useStyles();
  const [datastadium, setDatastadium] = useState();
  const history = useHistory();

  useEffect(() => {

    axios.get(`http://localhost:5000/stadium/search`)
      .then(res => {
        if (res.status === 200) {
          setDatastadium(res.data)
        }
      }).catch(err => {
      });

  }, []);

  const getAllStadium = () => {
    axios.get(`http://localhost:5000/stadium/search`)
      .then(res => {
        if (res.status === 200) {
          setDatastadium(res.data)
        }
      }).catch(err => {
      });
  }
  return (
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
                  Stadiums
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Box
                  justifyContent="center"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => history.push('/stadium/add')}
                  >
                    Add Stadium
                  </Button>
                </Box>
              </Grid>
            </Grid>
          }
          classes={{ root: classes.cardHeaderRoot }}
        ></CardHeader>
        {/* <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button> */}
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
                  Stadium Name
                </TableCell>
                <TableCell
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                  Size
                </TableCell>

                <TableCell
                  style={{ width: "10%" }}
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                  Location
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
              {datastadium &&
                datastadium.map((element) => {
                  return (

                    <Itemtab item={element} getAllStadium={getAllStadium} />
                  )
                }
                )
              }
            </TableBody>
          </Box>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default List;