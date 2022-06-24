import React, {useEffect, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Itemtab from './Itemtab';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import HeaderOrga from "components/Headers/HeaderOrga.js";
// import Popup from "components/PopUp/Popup";
// import componentStyles from "assets/theme/views/admin/tables.js";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SimpleModal from '../../AddButton/simple-modal.component';
// import Modals from './PopUp/Modal';



const useStyles = makeStyles((theme)=> ({
  
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth:"100%",
  },
  
}));

const List = (props) => {
  const classes = useStyles();
  const [datateam, setDatateam] = useState();

  useEffect(() => {

    axios.get(`http://localhost:5000/team/search`)
    .then(res => {
      if (res.status === 200) {
        setDatateam(res.data)
      }
    }).catch(err => {
  });

  }, []);
  return (
    <Container
        maxWidth={false}
        component={Box}
        marginTop="1rem"
        classes={{ root: classes.containerRoot }}
      >
            <Grid className="main-form"
             item xs={12}
            >
            <Grid item xs={12} >
                <Grid  item xs={8}>
                  <Paper className={classes.paper}><p  >List Teams </p></Paper>
                  <Paper className={classes.paper} ><SimpleModal  xs={2} sm={6}/></Paper>    
                </Grid>
              </Grid>
              
              {/* <HeaderOrga/> */}
              {/* <Popup /> */}
                  {datateam &&
                      datateam.map((element) =>{
                        return( 
                          <Grid item xs={12} >
                              <Itemtab item={element}  />
                          </Grid>
                          )
                      
                      }
                    )
                  }
              
            </Grid>
            
    </Container>
  );
};

export default List;