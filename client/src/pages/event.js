import React, { useEffect } from "react";
import API from "../utils/API";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import { useStoreContext } from "../utils/globalState";
import { LOADING, SEARCH_RECIPES } from "../utils/actions";

import UserList from "../components/UserList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Event() {
  const [value, setValue] = React.useState(0);
  // const [eventInfo, setEventInfo] = React.useState();

  const [state, dispatch] = useStoreContext();

  // Global State for selectedEvent set once "View Event Button" is pressed.
  useEffect(() => {
    API.getEventInfo(state.selectedEvent)
      .then((response) => {
        const eventData = response.data.data[0];

        // Set current event page with this event data
        console.log(eventData);
        // setEventInfo(eventData);
      })
      .catch((err) => {
        console.log(err);

        // Render error page???? Redirect to our 404 page???
      });
  }, [state]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function redirectRouter(route) {
    if (route == "recipe") {
      // return <Redirect to="recipe" />
    }
    // else return <Redirect to="/" />
  }

  return (
      <Container fluid="true">
        <Typography variant="h4">
          {state.event.details.name}
        </Typography>

        <AppBar position="static">
          <Tabs value={value} centered onChange={handleChange} aria-label="event tabs for sections">
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Guests" {...a11yProps(1)} />
            <Tab label="Menu" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            {/* <h4>Date: {state.event.details.date}</h4>
            <h4>Time: {state.event.details.time}</h4>
            <h4>Address: {state.event.details.address}</h4> */}
            {/* <p>Description: {eventInfo.description}</p> */}
           {/* <p>Description: {state.event.details.notes}</p> */}
          <Typography variant="h6">
            Description: {state.event.details.notes}
          </Typography>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container justify="center">
            {[
              { title: "Attending", value: "attendingInvites" },
              { title: "Maybe", value: "maybeInvites" },
              { title: "Declined", value: "declinedInvites" },
              { title: "Pending", value: "pendingInvites" },
            ].map((group) => (
              <UserList key={group.title} groupName={group.title} people={state.event.guestList[group.value]} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid container item xs={8} spacing={1}>
              <h2>Apps</h2>
            </Grid>
            <Grid container item xs={4} spacing={1}>
              <Button variant="contained" color="primary" 
                onClick={() => dispatch({ type: SEARCH_RECIPES, payload: {dishType: "Starter"}} )}
                >Add App
              </Button>
            </Grid>
            <Grid item xs={12}>
              {state.event.menu.apps.map((item) => (
                <li key={item.toString()}>{item}</li>
              ))}
            </Grid>
            <Grid container item xs={8} spacing={1}>
              <h2>Sides</h2>
            </Grid>
            <Grid container item xs={4} spacing={1}>
              <Button variant="contained" color="primary" 
                onClick={() => dispatch({ type: SEARCH_RECIPES, payload: {dishType: "Preps"}} )}>Add Side
              </Button>
            </Grid>
            <Grid item xs={12}>
              {state.event.menu.sides.map((item) => (
                <li key={item.toString()}>{item}</li>
              ))}
            </Grid>
            <Grid container item xs={8} spacing={1}>
              <h2>Main Dishes</h2>
            </Grid>
            <Grid container item xs={4} spacing={1}>
              <Button variant="contained" color="primary" 
                onClick={() => dispatch({ type: SEARCH_RECIPES, payload: {dishType: "Main course"}} )}>Add Main
              </Button>
            </Grid>
            <Grid item xs={12}>
              {state.event.menu.mains.map((item) => (
                <li key={item.toString()}>{item}</li>
              ))}
            </Grid>
          </Grid> 
        </TabPanel>
      </Container>
  );
}
