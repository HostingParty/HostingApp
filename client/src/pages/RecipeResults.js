import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
import { StoreProvider, useStoreContext } from "../utils/globalState";
import { makeStyles, List, ListItem, ListItemText, Grid, Typography, Container } from '@material-ui/core';
import { LOADING, SEARCH_RECIPES, ADD_RECIPE } from "../utils/actions";
import RecipeReviewCard from '../components/RecipeCard';


export function Recipe () {
  const [value, setValue] = React.useState(0);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    console.log("useEffect");
    API.getRecipes(); 
  }, [state]);

  const Events = {
    menu: {
      apps: ["Chips", "Dip", "Salsa"],
      sides: ["Green Salad", "Bread sticks"],
      mains: ["Turducken"]
    }
  }

  const RecipeList = () => {
    
    const getRecipes = () => {
      dispatch({ type: LOADING });
      dispatch({ type: SEARCH_RECIPES });
        return (
          <>
            <h1>apps</h1>
            {
//               //map over recipeSearchArr -> this will map over the recipes coming from the search results from edemam
              state.event.menu(i => <span> {i} </span>)
            }
          </>
        )
    };
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
}};



///////////////////////////  /////////////////////////////
///////////////////////////  /////////////////////////////
///////////////////////////  /////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [state, dispatch] = useStoreContext();
  console.log(state);

  return (
    <Container>
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          {`Search Results For ${state.dishType}`}         
          
        

          { state.event.recipeSearchArr }
          {console.log("this is the recipe page", state.event.recipeSearchArr)}
           
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Text only
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}
