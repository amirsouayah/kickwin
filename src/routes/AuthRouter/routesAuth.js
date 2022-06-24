// core components
import Dashboard from "views/organiser/Dashboard.js";
import Icons from "views/organiser/Icons.js";
import Maps from "views/organiser/Maps.js";
// import Profile from "views/organiser/Profile.js";
import Tables from "views/organiser/Tables.js";



import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Grain from "@material-ui/icons/Grain";
import LocationOn from "@material-ui/icons/LocationOn";

import Person from "@material-ui/icons/Person";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import List from "components/list";
// import TeamsList from "components/Teams/TeamList";
// import AddTeam from "components/Teams/AddTeam";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";

import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";

var routesOrga = [
  {
    path: "/pending",
    name: "Pending Competition",
    icon: EmojiEventsIcon,
    iconColor: "Primary",
    component: Dashboard,
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
    icon: LocationOn,
    iconColor: "Warning",
    component: Maps,
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
    path: "/stadiums",
    name: "stadiums",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/organiser",
  },
  {
    divider: true,
  },
  {
    path: "/newcompetition",
    name: "New Competiton",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/organiser",
  },
   {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  
  
  
];
export default routesOrga;
