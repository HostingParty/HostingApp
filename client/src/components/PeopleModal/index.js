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

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, friends, eventInfo, setEventInfo, open } = props;

  const [state, setState] = React.useState(friends.map(person => (
    {...person, invitedStatus: false}
  )))

  const handleClose = () => {
    // let invited = state.filter(item => item.status); //might be okay to keep invitedStatus on user obj
    setEventInfo({ ...eventInfo, pending: state.filter(item => item.invitedStatus) })
    onClose();
  };

  const handleListItemClick = (value, index) => {
    let updateState = [...state];
    updateState[index].invitedStatus = !updateState[index].invitedStatus
    setState(updateState)

  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Guests</DialogTitle>
      <List>
        {state.map((person, index) => (
          <ListItem button onClick={() => handleListItemClick(person, index)} key={person._id}>
            <Checkbox
                checked={person.status}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={person.name.first + " " + person.name.last} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleClose(state)}>
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

export default function PeopleListModal(props) {
  const { friends, eventInfo, setEventInfo} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div>
      <Button fullWidth variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Guest List
      </Button>
      <SimpleDialog friends={friends} eventInfo={eventInfo} setEventInfo={setEventInfo} open={open} onClose={handleClose}/>
    </div>
  );
}