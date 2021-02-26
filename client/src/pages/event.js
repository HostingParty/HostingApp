import React, { useEffect } from "react";
import API from "../utils/API";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory, useLocation } from "react-router-dom";
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
import { LOADING, SEARCH_RECIPES, PASS_DISH } from "../utils/actions";

import UserList from "../components/UserList";
import RecipeReviewCard from "../components/RecipeCard";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';
import Recipe from "./RecipeResults";

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


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
  let history = useHistory();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const [state, dispatch] = useStoreContext();
  const preventDefault = (event) => event.preventDefault();

  // Global State for selectedEvent set once "View Event Button" is pressed.
  useEffect(() => {
    API.getEventInfo(state.selectedEvent)
      .then((response) => {
        const eventData = response.data.data[0];

        // Set current event page with this event data
        console.log(eventData, "State DATA:", state.event);
        // setEventInfo(eventData);
      })
      .catch((err) => {
        console.log(err);

        // Render error page???? Redirect to our 404 page???
      });
  }, [state.selectedEvent]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function redirectRouter(route) {
    if (route == "recipe") {
      // return <Redirect to="recipe" />
    }
    // else return <Redirect to="/" />
  }

  const handleRecipeAppStateChange = (e) => {
    dispatch({ type: PASS_DISH, payload: {dishType: "Starter"}});
    history.push("/recipe");
  };
  
  const handleRecipeSidesStateChange = (e) => {
    dispatch({ type: PASS_DISH, payload: {dishType: "Preps"}});
    history.push("/recipe");
  };

  const handleRecipeMainsStateChange = (e) => {
    dispatch({ type: PASS_DISH, payload: {dishType: "Main Course"}});
    history.push("/recipe");
  };

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
          <Button variant="contained" color="primary" 
                component={Link} to={"/make-event"}
                >Edit Details
          </Button>
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
          <Button variant="contained" color="primary" 
                component={Link} to={"/make-event"}
                >Edit Guests
          </Button>
        </TabPanel>
        
        <TabPanel value={value} index={2}>
          <Accordion width="100">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Appetizers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column" width="full">
                <Grid item xs={12}>
                  { state.event.menu.apps.length ?
                    <Typography>Below are your appetizers saved for the event</Typography>
                    : <Typography>No saved recipes found.</Typography>}
                  <Button variant="contained" color="secondary" 
                    onClick={handleRecipeAppStateChange}
                    >Search for Apps
                  </Button>
                </Grid>
                <Grid item container>
                  <Grid item xs={false} sm={2} />
                  <Grid item container xs={12} sm={8} spacing={3}>
                    {state.event.menu.apps ? state.event.menu.apps.map((item) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <RecipeReviewCard {...item} />
                      </Grid>
                    )) : <Typography>No saved recipes found.</Typography>}
                  </Grid>
                  <Grid item xs={false} sm={2} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Side Dishes</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container direction="column" width="full">
              <Grid item xs={12}>
                { state.event.menu.sides.length ?
                  <Typography>Below are your side dishes saved for the event</Typography>
                  : <Typography>No saved recipes found.</Typography>}
                  <Button variant="contained" color="secondary" 
                    onClick={handleRecipeSidesStateChange}
                    >Search for Sides
                  </Button>
                </Grid>
                <Grid item container>
                  <Grid item xs={false} sm={2}/>
                  <Grid item container xs={12} sm={8} spacing={3}>
                    { state.event.menu.sides.map((item) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <RecipeReviewCard {...item} />
                      </Grid>
                    ))} 
                  </Grid>
                  <Grid item xs={false} sm={2} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Main Dishes</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container direction="column" width="full">
              <Grid item xs={12}>
                { state.event.menu.mains.length ?
                  <Typography>Below are your main dishes saved for the event</Typography>
                  : <Typography>No saved recipes found.</Typography>}
                  <Button variant="contained" color="secondary" 
                    onClick={handleRecipeMainsStateChange}
                    >Search for Main Dish
                  </Button>
                </Grid>
                <Grid item container>
                  <Grid item xs={false} sm={2} />
                  <Grid item container xs={12} sm={8} spacing={3}>
                    {state.event.menu.mains.map((item) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <RecipeReviewCard {...item} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={false} sm={2} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
      </Container>
  );
}
