import React, { useEffect } from "react";
import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from "../../utils/globalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListIcon from '@material-ui/icons/List';
import { Link } from "react-router-dom";
import { SET_SELECTED_EVENT } from '../../utils/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  iconColor: {
    color: "#0e5d9e", 
  }
}));

export default function EventList() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext(); 
  const hostingEvents = [...state.user.hosting];
  const pendingEvents = [...state.user.pending];
  const acceptedEvents = [...state.user.accepted];
  let events = [];

hostingEvents.forEach(element => {
  events.push({...element, status: "Hosting"})  //add status
  console.log(events)
});

pendingEvents.forEach(element => {
  events.push({...element, status: "Pending"})
})

acceptedEvents.forEach(element => {
  events.push({...element, status: "Accepted"})
})

useEffect(() => {
  API.getEventInfo(state.selectedEvent)
    .then((response) => {
      const eventData = response.data.data[0];

      // Set current event page with this event data
      
      console.log(state.selectedEvent)
      // setEventInfo(eventData);
    })
    .catch((err) => {
      console.log(err);

      // Render error page???? Redirect to our 404 page???
    });
}, [state]);



 
  return (

    <div>
    <Typography align="center" variant="h3">Welcome to {state.user.name.first}'s events</Typography>

    <List className={classes.root}>
      {events.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        
       

        return (
            <div>
            
          <ListItem onClick={(e) => dispatch({ type: SET_SELECTED_EVENT, payload: value._id})} component={Link} to={"/event"} button="true" divider="true" key={value._id} role={undefined}> 
                   
            <ListItemText id={labelId} primary={value.title} />
            <ListItemText primary={value.status} secondary={value.date} />           
            
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <ListIcon className={classes.iconColor}></ListIcon>
              </IconButton>              
            </ListItemSecondaryAction>            
          </ListItem>
          </div>
        );
      })}
    </List>
    </div>
  );
}
