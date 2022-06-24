// core components
import Dashboard from "views/organiser/Dashboard.js";
import Icons from "views/organiser/Icons.js";
// import Maps from "views/organiser/Maps.js";
// import Profile from "views/organiser/Profile.js";
// import Tables from "views/organiser/Tables.js";
// import TablesStadium from "views/stadium/TablesStadium";
// import Login from "../../views/auth/Login";
// import Register from "../../views/auth/Register";
// import TeamsList from 'components/Teams/TeamList';
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import VpnKey from "@material-ui/icons/VpnKey";
// import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Grain from "@material-ui/icons/Grain";
// import LocationOn from "@material-ui/icons/LocationOn";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import Competitions from "../../views/organiser/Competitions"
import Person from "@material-ui/icons/Person";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
// import List from "components/list";
import { Add } from "@material-ui/icons";
// import AddTeam from "components/Teams/AddTeam";
import List from "components/list";
// import ListPlayers from "components/Lists/Players/listplayers";
import ListStadiums from "components/Lists/Stadium/liststadiums";
// import players from "components/Lists/Players/players";
import ListPlayers from "components/Lists/Players/listplayers";
import Form2 from "components/Form/Form2";
import GalaCup from "views/organiser/GalaCup";
import LeagueEast from "views/organiser/LeagueEast";
import ListLeague from "components/Lists/League/listLeague";
import ListMatch from "components/Lists/Match/listmatch";
import AppFetch from "components/Lists/Exemple/AppFetch";
// import AddTeam from "components/Teams/AddTeam";
// import TeamsList from "components/Teams/TeamList";
// import AddTeam from "components/Teams/AddTeam";

var routesOrga = [
  {
    path: "/index",
    name: "Dashboard",
    icon: EmojiEventsIcon,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/organiser",
  },
  {
    path: "/pending",
    name: "Pending Competition",
    icon: EmojiEventsIcon,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/organiser",
  },
  {
    path: "/galacup",
    name: "Gala Cup",
    icon: EmojiEventsIcon,
    iconColor: "Primary",
    component: GalaCup,
    layout: "/organiser",
  },
  {
    path: "/League",
    name: "League East",
    icon: EmojiEventsIcon,
    iconColor: "Primary",
    component: LeagueEast,
    layout: "/organiser",
  },
  {
    path: "/ongoing",
    name: "Ongoing Competition",
    icon: Grain,
    iconColor: "Primary",
    component: Icons,
    layout: "/organiser",
  },
  {
    path: "/completed",
    name: "Completed Competition",
    icon: CheckCircleOutlineIcon,
    iconColor: "Warning",
    component: List,
    layout: "/organiser",
  },
  {
    path: "/teamlist",
    name: "Team List",
    icon: Person,
    iconColor: "WarningLight",
    component: List,
    layout: "/organiser",
  },
  {
    path: "/players/:id",
    name: "Players",
    icon: Person,
    iconColor: "WarningLight",
    component: ListPlayers,
    layout: "/organiser",
  },
  {
    path: "/stadiums",
    name: "stadiums",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: ListStadiums,
    layout: "/organiser",
  },
  {
    path: "/leagues",
    name: "Leagues",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: ListLeague,
    layout: "/organiser",
  },
  {
    path: "/matches",
    name: "Matchs",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: ListMatch,
    layout: "/organiser",
  },
  {
    path: "/fetch",
    name: "Fetch",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: AppFetch,
    layout: "/organiser",
  },
  {
    divider: true,
  },
  {
    path: "/newcompetition",
    name: "New Competiton",
    icon: Add,
    iconColor: "Error",
    component: Form2,
    layout: "/organiser",
  },
  // {
  //   path: "/add",
  //   name: "Add Team",
  //   icon: Add,
  //   iconColor: "Error",
  //   component: AddTeam,
  //   layout: "/organiser",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: VpnKey,
  //   iconColor: "Info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: AccountCircle,
  //   iconColor: "ErrorLight",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routesOrga;
