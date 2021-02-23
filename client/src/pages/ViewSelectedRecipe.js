import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
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
    console.log(props);


  return (
    <Container className={RecipeReviewCard}> 
        <h2> Viewing Specific Recipe! </h2>
      <Grid>
        {state.event.menu.mains.map((item) => (
        <RecipeReviewCard {...item} /> ))}
        <Grid>
            <Button
                variant="contained" 
                color="primary" 
                onClick={() => dispatch({ 
                    type: ADD_RECIPE, 
                    payload: 
                        {dishType: "Starter", eventID: ""}} 
                )}
                // //  //  // //  //  //  // //  //  //  // //  //  //  // //  //  //  // //
                //  -------- //  //  -------- //   //  -------- //  //  -------- // 
                // they payload is the data passing through essentially. dishtype should come in from the info on the recipe object. EventID will tie the recipe to the actual event -> need to confirm the value for it though -- not sure "eventID" is what we'll use. Might not be needed if it's in global state.
                //  -------- //  //  -------- //   //  -------- //  //  -------- // 
                // //  //  // //  //  //  // //  //  //  // //  //  //  // //  //  //  // //
            >  
                Add to Event 
            </Button>
            {/* // this needs to send the recipe to the  */}
        </Grid>
        <Grid>
            <Link>Go Back to Results</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewSelectedRecipe;