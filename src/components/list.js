import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Itemtab from './Itemtab';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import HeaderOrga from "components/Headers/HeaderOrga.js";
// import Popup from "components/PopUp/Popup";
// import componentStyles from "assets/theme/views/admin/tables.js";
// import Paper from '@material-ui/core/Paper';
import TableBody from "@material-ui/core/TableBody";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SimpleModal from './AddButton/simple-modal.component';
// import Modals from './PopUp/Modal';
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableContainer } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import { useParams } from "react-router-dom";




const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },

}));

const List = (props) => {
  const classes = useStyles();
  const [datateam, setDatateam] = useState();
  const { id } = useParams();


  useEffect(() => {

    getAllTeam();

  }, []);

  const getAllTeam = () => {
    axios.get(`http://localhost:5000/team/search`)
      .then(res => {
        if (res.status === 200) {
          setDatateam(res.data)
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
                  Teams List
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Box
                  justifyContent="flex-end"
                  display="flex"
                  flexWrap="wrap"
                >
                  <SimpleModal xs={2} sm={6} />
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
                  Team Name
                </TableCell>
                <TableCell
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                  Leader
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
            {/* <HeaderOrga/> */}
            {/* <Popup /> */}
            <TableBody>
              {datateam &&
                datateam.map((element) => {
                  return (<Itemtab item={element} getAllTeam={getAllTeam} />
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