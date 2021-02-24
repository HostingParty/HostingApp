import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';

//get from user friend list
const friends = [
    {name: 'Brandon'}, 
    {name: 'Ben'},
    {name: 'Maranda'},
    {name: 'Brandon'},
];
const invites = friends.map(person => (
    {...person, status: false}
));
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const [state, setState] = React.useState([...invites])

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value, index) => {
    let updateState = [...state];
    updateState[index].status = !updateState[index].status
    setState(updateState)

  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Guests</DialogTitle>
      <List>
        {invites.map((person, index) => (
          <ListItem button onClick={() => handleListItemClick(person, index)} key={person.name}>
            <Checkbox
                checked={person.status}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={person.name} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleClose(invites)}>
          <ListItemAvatar>
            <Avatar>
              <SaveIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Save" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function PeopleListModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(friends[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value); //save guest list here, axios call
  };

  return (
    <div>
      <Button fullWidth variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Guest List
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}