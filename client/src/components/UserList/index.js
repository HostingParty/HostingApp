import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function UserList(props) {
  const { key, groupName } = props
  const [personStatus, setPersonStatus] = useState(groupName)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List align="center" component="nav" aria-label="event list of people">
      <Typography align="center" variant="h6">{props.groupName}</Typography>
        {props.people ?
        props.people.map(person => 
          <ListItem button>
            <PersonIcon color="secondary" ></PersonIcon>
            <ListItemText primary={person} />
        </ListItem>
          )
        : <Typography>No users found</Typography>}
      </List>
    </div>
  );
}