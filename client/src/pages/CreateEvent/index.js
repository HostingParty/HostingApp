import React from "react";
import "./style.css";
import NavBar from "../../components/Nav/index";
import EventList from "../../components/EventList/index";
import { useState } from "react";
import API from "../../utils/API";
import {
Button,
TextField,
Grid,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useStoreContext } from "../../utils/globalState";
import { useHistory } from "react-router-dom";
import { SET_SELECTED_EVENT } from "../../utils/actions";


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
      marginTop: "75px",
      

    }
  }));

function CreateEvent() {

    
    

    return (
        <div>

            <NavBar />
            <div>
              
                
            <Grid spacing={0} justify="center" direction="row">            
            <EventList />          
            </Grid>
           
            </div>
            

            {/* </div>

         <Grid container spacing={0} justify="center" direction="row">
            <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={(e) => handleChange(e)} id="" label="Event Name" variant="outlined" />
      <TextField onChange={(e) => handleChange(e)} id="" label="Address" variant="outlined" />
      <TextField onChange={(e) => handleChange(e)} id="" label="Notes" variant="outlined" />
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
    <Grid container spacing={0} justify="center" direction="row">
        <div className="btn">
            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)} onClick={(e) => handleSubmit(e)}>
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
    </Grid>  */}
   
   </div>
    
    )
}
export default CreateEvent;