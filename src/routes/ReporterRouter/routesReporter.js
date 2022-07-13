// core components
// import Dashboard from "views/organiser/Dashboard.js";
// import Icons from "views/organiser/Icons.js";
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
// import Grain from "@material-ui/icons/Grain";
// import LocationOn from "@material-ui/icons/LocationOn";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import Competitions from "../../views/organiser/Competitions"
// import Person from "@material-ui/icons/Person";
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
// import List from "components/list";
// import { Add } from "@material-ui/icons";
// import AddTeam from "components/Teams/AddTeam";
// import List from "components/list";
// import ListPlayers from "components/Lists/Players/listplayers";
// import ListStadiums from "components/Lists/Stadium/liststadiums";
// import players from "components/Lists/Players/players";
// import ListPlayers from "components/Lists/Players/listplayers";
// import Form2 from "components/Form/Form2";
// import GalaCup from "views/organiser/GalaCup";
// import LeagueEast from "views/organiser/LeagueEast";
import ListLeague from "components/Lists/League/listLeague";
import SignCode from 'views/reporter/FormReporter/SignCode';
import MatchEast from 'views/reporter/Match/MatchEast';
import ListMatch from "../../views/reporter/Match/listmatch";
// import FormLeague from "components/competition/FormLeague";
// import NewCompetition from "components/competition/NewCompetition";
// import FormCup from "components/competition/FormCup";
// import AppFetch from "components/Lists/Exemple/AppFetch";
// import AddTeam from "components/Teams/AddTeam";
// import TeamsList from "components/Teams/TeamList";
// import AddTeam from "components/Teams/AddTeam";

var routesReporter = [

  {
    path: "/leagues",
    name: "Leagues",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: ListLeague,
    layout: "/reporter",
  },
  {
    path: "/matchs/",
    name: "Matchs",
    icon: SportsSoccerIcon,
    iconColor: "Error",
    component: ListMatch,
    layout: "/reporter",
  },
  // {
  //   path: "/Match/:id",
  //   name: "",

  //   iconColor: "Primary",
  //   component: MatchEast,
  //   layout: "/reporter",
  // },
  {
    path: "/Match/:code",
    name: "",
    iconColor: "Primary",
    component: MatchEast,
    layout: "/reporter",
  },
  {
    path: "/signincode",
    name: "Sign with Code",

    iconColor: "Primary",
    component: SignCode,
    layout: "/reporter",
  },


];
export default routesReporter;
