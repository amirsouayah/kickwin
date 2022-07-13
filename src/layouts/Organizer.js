import React from "react";
// import { useLocation,Route } from "react-router-dom";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Search from "@material-ui/icons/Search";

// core components
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import AdminFooter from "components/Footers/AdminFooter.js";

// import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";

import routes from "../routes/OrganiserRouter/routesOrga";
// import routes from "routes.js";

import componentStyles from "assets/theme/layouts/admin.js";
// import Popup from "components/PopUp/Popup";

const useStyles = makeStyles(componentStyles);

const Organiser = () => {
  const classes = useStyles();
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/organiser") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <>
        <Sidebar
          routes={routes}
          logo={{
            innerLink: "/Organiser/index",
            imgSrc: require("../assets/img/brand/argon-react.png").default,
            imgAlt: "...",
          }}
          // dropdown={<NavbarDropdown />}

          input={
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-search-responsive">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search-responsive"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <Box
                      component={Search}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    />
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          }
        />

        <Box position="relative" className={classes.mainContent}>
          {/* <AdminNavbar brandText={getBrandText(location.pathname)} /> */}

          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
            marginTop="1rem"
          >
            <Switch>

              {getRoutes(routes)}
              <Redirect from="*" to="/organiser/index" />
            </Switch>

            {/* <Popup/> */}
            {/* <AdminFooter /> */}
          </Container>
        </Box>
      </>
    </>
  );
};

export default Organiser;