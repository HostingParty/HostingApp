import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from "../../utils/globalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { Link } from "react-router-dom";
import { SET_SELECTED_EVENT } from '../../utils/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  iconColor: {
    color: "#87edd1", 
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
  events.push({...element, status: "hosting"})  //add status
  console.log(events)
});

pendingEvents.forEach(element => {
  events.push({...element, status: "pending"})
})

acceptedEvents.forEach(element => {
  events.push({...element, status: "accepted"})
})


 
  return (

    <div>
    <Typography align="center" variant="h2">Welcome to {state.user.name.first}'s events</Typography>

    <List className={classes.root}>
      {events.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
      
       

        return (
            <div>
            <Divider varient="inset" conponent="li" />
          <ListItem key={value._id} role={undefined}>           
            <ListItemText id={labelId} primary={value.title} />
            <ListItemText primary={value.status} secondary={value.date} />
            
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={(e) => dispatch({ type: SET_SELECTED_EVENT, payload: {}})} component={Link} to={"/event"}>
                <LocalDiningIcon className={classes.iconColor}></LocalDiningIcon>
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
