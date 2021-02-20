import React from "react";
import { StoreProvider, useStoreContext } from "../utils/globalState";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// const RecipeList = () => {
//   const [state, dispatch] = useStoreContext();

//   const getRecipes = () => {
//     dispatch({ type: LOADING });
//     dispatch({ type: UPDATE_RECIPES });
//   };

//   const removeFromRecipes = id => {
//     dispatch({
//       type: REMOVE_RECIPE,
//       _id: id
//     });
//   };

//   useEffect(() => {
//     getRecipes();
//   }, []);

// const Events = {
//   menu: {
//     apps: ["Chips", "Dip", "Salsa"],
//     sides: ["Green Salad", "Bread sticks"],
//     mains: ["Turducken"]
//   }
// }

// const Recipe = () => {
//   return (
//     <>
//       <h1>apps</h1>
//       {
//         events.menu.apps.map(i => <span> {i} </span>)
//       }
//     </>
//   )
// }

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
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Search Results For {  }
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
  );
}