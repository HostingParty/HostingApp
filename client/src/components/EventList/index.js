import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from "../../utils/globalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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
  const eventName = state.event.details.name;
  const eventDate = state.event.details.date;
  const eventNote = state.event.details.notes;
 
  return (
    
    <List className={classes.root}>
      {[0, 1, 2].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
       

        return (
            <div>
            <Divider varient="inset" conponent="li" />
          <ListItem key={value} role={undefined}>           
            <ListItemText id={labelId} primary={eventNote} />
            <ListItemText primary={eventName} secondary={eventDate} />
            
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={(e) => dispatch({ type: SET_SELECTED_EVENT, payload: {eventName: value }})} component={Link} to={"/event"}>
                <LocalDiningIcon className={classes.iconColor}></LocalDiningIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          </div>
        );
      })}
    </List>
  );
}
