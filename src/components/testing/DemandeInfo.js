import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar } from "@mui/material";

import withStyles from '@mui/styles/withStyles';

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function DemandeInfo(props) {
  const { classes, openAddBalanceDialog } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Liste des demandes" secondary=" " />
      {/* <Button
        variant="contained"
        color="secondary"
        onClick={openAddBalanceDialog}
        disableElevation
      >
        Add Balance
      </Button> */}
    </Toolbar>
  );
}

DemandeInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(DemandeInfo);
