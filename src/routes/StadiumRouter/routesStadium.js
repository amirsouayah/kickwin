// core components
// import Dashboard from "views/organiser/Dashboard.js";
// import Icons from "views/organiser/Icons.js";
// import Maps from "views/organiser/Maps.js";
// import Profile from "views/organiser/Profile.js";
// import Tables from "views/organiser/Tables.js";
// import Login from "../../views/auth/Login";
// import Register from "../../views/auth/Register";
// import TeamsList from 'components/Teams/TeamList';
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import VpnKey from "@material-ui/icons/VpnKey";
// import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
// import Grain from "@material-ui/icons/Grain";
// import LocationOn from "@material-ui/icons/LocationOn";

import { Add } from "@material-ui/icons";
import Calendar from "views/stadium/Calendar";
// import Person from "@material-ui/icons/Person";
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
// import List from "components/list";
// import { Add } from "@material-ui/icons";
// import AddTeam from "components/Teams/AddTeam";
import Tables from "../../views/stadium/TablesStadium";
// import TabPanel from "../../components/Tabs/TabPanel"
import SimpleTabs from "components/Tabs/SimpleTab";
// import AddTeam from "components/Teams/AddTeam";
// import TeamsList from "components/Teams/TeamList";
// import AddTeam from "components/Teams/AddTeam";

var routesStadium = [

  {
    path: "/add",
    name: "Add Stadium",
    icon: Add,
    iconColor: "WarningLight",
    component: Tables,
    layout: "/stadium",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: Add,
    iconColor: "WarningLight",
    component: Calendar,
    layout: "/stadium",
  },
  {
    path: "/TabStadium",
    name: "Stadium",
    icon: Add,
    iconColor: "WarningLight",
    component: SimpleTabs,
    layout: "/stadium",
  },
  
  
];
export default routesStadium;
