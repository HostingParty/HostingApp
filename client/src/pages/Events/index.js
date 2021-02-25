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
Paper,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
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

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
      marginLeft: "20px",
    }
    
  }));

function CreateEvent() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext(); 
    

    return (
        <div>

            <NavBar />
            
              <Grid container spacing={3}>
                <Grid item xs={4}>
                {/* <Paper noWrap="true" className={classes.paper}></Paper> */}
                </Grid>
            <Grid item xs={4} spacing={0} justify="center" direction="row">            
            <EventList />                      
            </Grid>
            <Grid item xs={4}>
            {/* <Paper className={classes.paper}></Paper> */}
            </Grid>            
            </Grid>
            <Grid container spacing={0}>
            <Grid item xs={4}></Grid>
            <Grid className={classes.margin} item xs={3}>
            <Button className={classes.margin} component={Link} to={"/make-event"}   
                        id="submitBtn"
                        variant="contained"
                        color="primary"
                        // type="submit"
                        className="button-block"              
                      >
                        Create Event
                      </Button>
                      </Grid>
            <Grid item xs={4}></Grid>
            </Grid>

            
            </div>
              
  
    
    )
}
export default CreateEvent;