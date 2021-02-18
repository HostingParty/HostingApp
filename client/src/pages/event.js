import React, {useEffect} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { useStoreContext } from "../utils/globalState";
import { REMOVE_INVITE, ADD_INVITE, LOADING } from "../utils/actions";

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
    'aria-controls': `simple-tabpanel-${index}`,
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
     <Container fluid>
       <h1>
         Event Page!
       </h1>
       <AppBar position="static">
       <Tabs value={value} centered onChange={handleChange} aria-label="event tabs for sections">
         <Tab label="Event Details" {...a11yProps(0)} />
         <Tab label="Guest List" {...a11yProps(1)} />
         <Tab label="Menu" {...a11yProps(2)} />
       </Tabs>
     </AppBar>
     <TabPanel value={value} index={0}>
       <h4>Name: {state.event.details.name}</h4>
       <h4>Date: {state.event.details.date}</h4>
       <h4>Time: {state.event.details.time}</h4>
       <h4>Address: {state.event.details.address}</h4>
       <p>Notes: {state.event.details.notes}</p>
     </TabPanel>
     <TabPanel value={value} index={1}>
      <Grid container justify="center">
  
        {[
          {title: "Attending", value: "attendingInvites" },
          {title: "Maybe", value: "maybeInvites" },
          {title: "Declined", value: "declinedInvites" },
          {title: "Pending", value: "pendingInvites" }
          ].map((group) => (
          <UserList 
            groupName = {group.title}
            people = {state.event.guestList[group.value]}
          />
        ))}
      </Grid>
     </TabPanel>
     <TabPanel value={value} index={2}>
       <h4>Apps</h4>
       {state.event.menu.apps.map((item) => 
          <li key={item.toString()}>{item}</li>
       )}

       <h4>Sides</h4>
       {state.event.menu.sides.map((item) => 
          <li key={item.toString()}>{item}</li>
       )}
       <h4>Main Dishes</h4>
       {state.event.menu.mains.map((item) => 
          <li key={item.toString()}>{item}</li>
       )}
     </TabPanel>
      
     </Container>

    </div>
  );
}