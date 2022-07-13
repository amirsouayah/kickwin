import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ItemtabLeague from './ItemtabLeague';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import HeaderOrga from "components/Headers/HeaderOrga.js";
// import Popup from "components/PopUp/Popup";
// import componentStyles from "assets/theme/views/admin/tables.js";
// import Paper from '@material-ui/core/Paper';
import TableBody from "@material-ui/core/TableBody";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
// import SimpleModal from '../../AddButton/AddLeague';
// import Modals from './PopUp/Modal';
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Modal from "../../AddButton/Modal" ;



const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "100%",
  },

}));

const ListLeague = (props) => {
  const classes = useStyles();
  const [dataleague, setDataleague] = useState();

  useEffect(() => {

    getAllLeague();

  }, []);

  const getAllLeague = () => {
    axios.get(`http://localhost:5000/league/search`)
      .then(res => {
        if (res.status === 200) {
          setDataleague(res.data)
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
      <Card>
        {/* <CardHeader
            className={classes.cardHeader}
            title="Stadiums" 
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          >
            
          </CardHeader> */}

        {/* Hello */}
        <Grid className="main-form"
          item xs={12}
        >
          <Grid item xs={12}>
            <Grid item xs={12}>
              {/* <Paper className={classes.paper}><p  >List Teams </p></Paper> */}
              {/* <Paper className={classes.paper} ><SimpleModal  xs={2} sm={6}/></Paper>     */}
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
                        Leagues List
                      </Box>
                    </Grid>
                    {/* <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <SimpleModal xs={2} sm={6} />

                      </Box>
                    </Grid> */}
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
            </Grid>
            <TableHead>
              <TableRow>
                <TableCell

                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                  League Name
                </TableCell>
                <TableCell
                  style={{ justifyContent: 'center' }}
                >
                  Number of Teams
                </TableCell>

                <TableCell
                  style={{ width: "10%" }}
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >End Date
                </TableCell>
                <TableCell
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >
                </TableCell>
                <TableCell
                  classes={{
                    root:
                      classes.tableCellRoot + " " + classes.tableCellRootHead,
                  }}
                >Actions
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <HeaderOrga/> */}
            {/* <Popup /> */}
            <TableBody>
              {dataleague &&
                dataleague.map((element) => {
                  return (<ItemtabLeague item={element} getAllLeague={getAllLeague} />
                  )

                }
                )
              }
            </TableBody>
          </Grid>
        </Grid>
      </Card>

    </Container>
  );
};

export default ListLeague;