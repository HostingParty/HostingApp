import React, { useEffect } from "react";
import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import { useStoreContext } from "../../utils/globalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import ListIcon from '@material-ui/icons/List';
import { Link } from "react-router-dom";
import { SET_SELECTED_EVENT } from '../../utils/actions';
import Popper from "./popperIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  iconColor: {
    color: "#0e5d9e", 
  },
  picSize: {
    width: "50px",
    height: "50px",
    marginLeft: "15px",
  },
  hostingColor: {
    color: "#ff0061",
  }
  
}));

export default function RecipeList() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext(); 
  const recipeListing = [...state.recipeSearchArr];


  recipeListing.forEach(element => {
  recipeListing.push({...element}) 
  console.log(events)
});

useEffect(() => {
  API.getEventInfo(state.selectedEvent)
    .then((response) => {
      const eventData = response.data.data[0];

      // Set current event page with this event data
      
      console.log(state.selectedEvent)
      // setEventInfo(eventData);
    })
    .catch((err) => {
      console.log(err);
    });
}, [state]);
 
  return (

    <List className={classes.root}>
    {state.recipeSearchArr.map => {
       const recipeItem = 

        return (
            <div>
            
          <ListItem alignItems="start"
          component={Link} to={"/recipe"} button="true" divider="true" 
             <Grid item xs={6}>     
            <ListItemText id={recipeItem} primary={value.title} secondary={value.description} />
            </Grid> 
            <Grid item xs={6}>
            <ListItemText primary={value.status} secondary={value.eventDate} />           
            </Grid>          
          </ListItem>
          </div>
        );
      })}
    </List>
  );
}
