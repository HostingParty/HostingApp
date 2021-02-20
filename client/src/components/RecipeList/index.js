import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function RecipeListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function RecipeList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="list of recipes for the event">
        <h2>{props.groupName}</h2>
        {props.recipes.map(recipe => 
          <ListItem button>
          <ListItemText primary={recipe} />
        </ListItem>
          )}
      </List>
    </div>
  );
}