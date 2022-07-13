import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Header from '../components/Header';
// import AddTeam from './components/Teams/AddTeam';
// import EditTeam from 'components/Teams/EditTeam';
import TeamsList from './components/Teams/TeamList';
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import OrganiserLayout from "layouts/Organizer";
import ReporterLayout from "layouts/Reporter";
import StadiumLayout from "layouts/Stadium";
// import List from "components/list";
import useLocalStorage from './hooks/useLocalStorage';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from 'views/auth/Profile';
// import Copyright from './views/reporter/FormReporter/SignCode';
import ListPlayers from './components/Lists/Players/listplayers';
import SignCode from 'views/reporter/FormReporter/SignCode';
const AppRouter = () => {
  const [teams, setTeams] = useLocalStorage('Teams', []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <div className="main-content">
              <Switch>
                <Route path="/profile" render={(props) => <Profile {...props} />} />
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Route path="/organiser" render={(props) => <OrganiserLayout {...props} />} />
                <Route path="/stadium" render={(props) => <StadiumLayout {...props} />} />
                <Route path="/reporter" render={(props) => <ReporterLayout {...props} />} />

                <Route
                  render={(props) => (
                    <TeamsList {...props} teams={teams} setTeams={setTeams} />
                  )}
                  path="/team"
                  exact={true} />
                {/* <Route path="/Team" render={() => <AppRouter />} /> */}
                {/* TEAMS ROUTERS  */}
                {/* <Route 
                        render={(props) => (
                          <TeamsList {...props} teams={teams} setTeams={setTeams} />
                        )} 
                        path="/team" 
                        exact={true} /> */}
                {/* <Route component={Demande} path="/demande" exact={true} /> */}
                {/* <Route  
                        render={(props) => (
                        <AddTeam {...props} teams={teams} setTeams={setTeams} />
                        )} 
                        path="/add"
                    />
                    <Route
                        render={(props) => (
                          <EditTeam {...props} teams={teams} setTeams={setTeams} />
                        )}
                        path="/edit/:id"
                      /> */}
                {/* <Route component={() => <Redirect to="/team" />} /> */}
                {/* END TEAMs ROUTERS */}
                {/* <Route component={TeamsList} path="/organiser/list" /> */}
                <Route component={ListPlayers} path="/organiser/teamlist/hello" />
                <Route component={SignCode} path="/signreporter" />
                {/* <Route component={Copyright} path="/reporter/signin" /> */}
                <Redirect from="/" to="/auth/login" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default AppRouter;