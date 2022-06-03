import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import OrganiserLayout from "layouts/Organizer";
// import AddTeam from "components/Teams/AddTeam";

import TeamsList from "components/Teams/TeamList";
import List from "components/list";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/organiser" render={(props) => <OrganiserLayout {...props} />} />
        {/* <Route path="/Team" render={() => <AppRouter />} /> */}
        <Route component={TeamsList} path="/team" exact={true} />
        {/* <Route path="/add" render={(props) => <AddTeam {...props} /> }/> */}
        <Route component={List} path="/organiser/list" />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);
