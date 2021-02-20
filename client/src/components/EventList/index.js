import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from "../../utils/globalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ContactsIcon from '@material-ui/icons/Contacts';
import Divider from '@material-ui/core/Divider';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function EventList() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

 
  return (
    <List className={classes.root}>
      {[0, 1, 2].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        

        return (
            <div>
            <Divider varient="inset" conponent="li" />
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>           
            <ListItemText id={labelId} primary={`Upcoming Event ${value + 1}`} />
            <ListItemText primary={"Date: 2/20/2021"} secondary="Coding fun" />
            
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <LocalDiningIcon color="warning"></LocalDiningIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          </div>
        );
      })}
    </List>
  );
}
