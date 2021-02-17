import React from "react";
import "./style.css";
import NavBar from "../Nav/index";
import {
Button,
TextField,
Grid,
Paper,
AppBar,
Typography,
Toolbar,
Link,
IconButton,
Badge,
MenuItem,
Menu,
} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    root: {
      margin: theme.spacing(3),
      width: "25ch",
      marginTop: "150px",
      

    }
  }));

function CreateEvent() {

    const classes = useStyles();

    return (
        <div>
            <NavBar />
        <Grid container spacing={0} justify="center" direction="row">
            <form className={classes.root} noValidate autoComplete="off">
      <TextField id="" label="Host Name" variant="outlined" />
      <TextField id="" label="Event Name" variant="outlined" />
      <TextField id="" label="Location" variant="outlined" />
    </form>
    </Grid>
      <Grid container spacing={0} justify="center" direction="row">
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Date of Event"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </Grid>
    
        <div className="btn">
            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Create Event
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Vitural</MenuItem>
            <MenuItem onClick={popupState.close}>In Person</MenuItem>
          </Menu>
        </React.Fragment>
        
      )}
      
    </PopupState>
    </div>
    
   
    
    
        </div>
    )
}
export default CreateEvent;