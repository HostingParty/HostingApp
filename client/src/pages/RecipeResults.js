import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
import { StoreProvider, useStoreContext, searchRecipes } from "../utils/globalState";
import { makeStyles, List, ListItem, ListItemText, Grid, Typography, Container } from '@material-ui/core';
import { LOADING, SET_RECIPES, ADD_RECIPE } from "../utils/actions";


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
  useEffect(() => {
    (async () => {
      const recipes = await searchRecipes (state.dishType)
      dispatch({
        type: SET_RECIPES,
        payload: recipes,
      })
    })();
  }, [state.dishType])

  return (
    <Container>
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          {`Search Results For ${state.dishType}`}         
          {console.log("this is the recipe page", state.recipeSearchArr)}
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>            
             { state.recipeSearchArr.map(item =>               
                <List>
                <a href="/viewSelectedRecipe">
                  <ListItem button>
                     <ListItemText primary= {item.label} />
                   </ListItem>
                 </a>
               </List> )}           
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}
