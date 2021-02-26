import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import { StoreProvider, useStoreContext } from "../utils/globalState";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { LOADING, SEARCH_RECIPES, ADD_RECIPE } from "../utils/actions";
import RecipeReviewCard from "../components/RecipeCard";
import { Container, Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";



const ViewSelectedRecipe = (props) => {

    const RecipeCard = props.className;
    const [value, setValue] = React.useState(0);
    const [state, dispatch] = useStoreContext();
    let history = useHistory();

    console.log(props);

    const handleSaveRecipe = (e) => {
      dispatch({ type: ADD_RECIPE, payload: {dishType: "Starter"}});
      history.push("/recipe");
    };


  return (
    <Container className={RecipeReviewCard}> 
        <h2> Viewing Specific Recipe! </h2>
      <Grid>
        {state.event.menu.mains.map((item) => (
        <RecipeReviewCard {...item} /> ))}
        <Grid>
            <Button
                variant="contained" color="primary" 
                onClick={handleSaveRecipe} >  
                Add to Event 
            </Button>
        </Grid>
        <Grid>
            <Link href="/recipe">Go Back to Results</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewSelectedRecipe;