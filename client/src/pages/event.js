import React, { useEffect } from "react";
import API from "../utils/API";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import { useStoreContext } from "../utils/globalState";
import { REMOVE_INVITE, ADD_INVITE, LOADING, SET_SELECTED_EVENT } from "../utils/actions";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export function Event() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [eventInfo, setEventInfo] = React.useState();

  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    // dispatch({ type: UPDATE_FAVORITES });
  };

  // const removeFromFavorites = id => {
  //   dispatch({
  //     type: REMOVE_FAVORITE,
  //     _id: id
  //   });
  // };

  useEffect(() => {
    getFavorites();
  }, []);

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

  return (
      <Container fluid>
        <h1>Event Page!</h1>
        <AppBar position="static">
          <Tabs value={value} centered onChange={handleChange} aria-label="event tabs for sections">
            <Tab label="Event Details" {...a11yProps(0)} />
            <Tab label="Guest List" {...a11yProps(1)} />
            <Tab label="Menu" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {/* <h4>Name: {eventInfo.title}</h4>
          <h4>Date: {eventInfo.eventDate}</h4> */}
          <h4>Name: {state.event.details.name}</h4>
          <h4>Date: {state.event.details.date}</h4>
          <h4>Time: {state.event.details.time}</h4>
          <h4>Address: {state.event.details.address}</h4>
          {/* <p>Description: {eventInfo.description}</p> */}
           <p>Description: {state.event.details.notes}</p>
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
              <Grid item xs={12}>
                <h2>Apps</h2>
                <Button id="addApp" variant="contained" color="primary" onClick={() => { alert('clicked') }}>Add App</Button>
              </Grid>
              <Grid item xs={12}>
                {state.event.menu.apps.map((item) => (
                  <li key={item.toString()}>{item}</li>
                ))}
              </Grid>
              <Grid item xs={12}>
                <h2>Sides</h2>
                <Button id="addSide" variant="contained" color="primary" onClick={() => { alert('clicked') }}>Add Side</Button>
              </Grid>
              <Grid item xs={12}>
                {state.event.menu.sides.map((item) => (
                  <li key={item.toString()}>{item}</li>
                ))}
              </Grid>
              <Grid item xs={12}>
                <h2>Main Dishes</h2>
                <Button id="addMain" variant="contained" color="primary" onClick={() => { alert('clicked') }}>Add Main Dish</Button>
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
