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
    const dishTypeMapper = {
      "starter": "apps",
      "preps": "sides",
      "main course": "mains"
    }

    const handleSaveRecipe = (e) => {
      let recipe = {
        uri : state.searchedRecipe.uri,
        label: state.searchedRecipe.label,
        dishType: state.searchedRecipe.dishType[0],
        image: state.searchedRecipe.image,
        ingredientLines: state.searchedRecipe.ingredientLines,
        healthLabels: state.searchedRecipe.healthLabels
      };
      let dishTypeLowerCase = dishTypeMapper[recipe.dishType].toLowerCase();
      API.addRecipes(state.selectedEvent, dishTypeMapper[recipe.dishType], recipe)
        .then((data) => {
        history.push("/event");
      }).catch((error)=>{
        console.log(error);
      })
    }

    useEffect(() => {
    }, [state]);

  return (
    <Container className={RecipeReviewCard}> 
        <h2> Viewing Recipe </h2>
      <Grid>
        {
          state.searchedRecipe ?
          <RecipeReviewCard {...state.searchedRecipe} />
          :
          <h4>
            No recipe found...
          </h4>
        }
        <Grid>
            <Button
                variant="contained" color="primary" 
                onClick={handleSaveRecipe} >  
                Add to Event 
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewSelectedRecipe;