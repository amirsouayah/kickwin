import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import School from "@material-ui/icons/School";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

// core components
import componentStyles from "assets/theme/views/auth/register.js";

const useStyles = makeStyles(componentStyles);
const initialState = {
  name: '',
  email: '',
  password: ''

}

function Register() {
  const classes = useStyles();
  const history = useHistory()
  const theme = useTheme();
  const [user, setUser] = useState(initialState)

  const { name, email, password } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })

  }
  const myRegister = () => {
    axios.post('http://localhost:5000/user/register', user)

    history.push("/auth/login")
  }
  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
        <Card classes={{ root: classes.cardRoot }}>

          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1.5rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                Sign up with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                onChange={(e) => { setUser({ ...user, ...{ name: e.target.value } }) }}
                startAdornment={
                  <InputAdornment position="start">
                    <School />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
                onChange={(e) => { setUser({ ...user, ...{ email: e.target.value } }) }}
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                placeholder="Password"
                onChange={(e) => { setUser({ ...user, ...{ password: e.target.value } }) }}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              fontStyle="italic"
              fontSize="1rem"
              color={theme.palette.gray[600]}
              marginBottom=".5rem"
            >
              <Box component="small" fontSize="80%">
                password strength:{" "}
                <Box
                  component="span"
                  fontWeight="700"
                  color={theme.palette.success.main}
                >
                  strong
                </Box>
              </Box>
            </Box>
            <FormControlLabel
              value="reporter"
              control={<Checkbox color="primary" />}
              onChange={(e) => { setUser({ ...user, ...{ role: e.target.value } }) }}
              label="Reporter"
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            <FormControlLabel
              value="stadium"
              control={<Checkbox color="primary" />}
              label='Stadium'
              onChange={(e) => { setUser({ ...user, ...{ role: e.target.value } }) }}
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,

              }}
            />
            <FormControlLabel
              value="organizer"
              control={<Checkbox color="primary" />}
              label="Organizer"
              onChange={(e) => { setUser({ ...user, ...{ role: e.target.value } }) }}
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />

            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained" onClick={() => myRegister()} >
                Create account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;
