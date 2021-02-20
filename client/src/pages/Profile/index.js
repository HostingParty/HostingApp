import React, { useEffect } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/globalState";
import "./style.css";
import NavBar from "../../components/Nav/index";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../components/Avatar/index";
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
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function Profile() {
  const classes = useStyles();
  const [userState, dispatch] = useStoreContext();

  const [state, setState] = React.useState({
    fish: true,
    peanuts: false,
    dary: false,
    chocolate: false,
    none: false,
    italian: false,
    steak: false,
    vegies: false,
    fingerFoods: false,
    pizza: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { fish, peanuts, dary, chocolate, none, italian, steak, vegies, fingerFoods, pizza } = state;
  const error =
    [fish, peanuts, dary, chocolate, none, italian, steak, vegies, fingerFoods, pizza].filter((v) => v).length !== 2;

  // const { italian, steak, vegies, fingerFoods, pizza } = state;
  // const error = [italian, steak, vegies, fingerFoods, pizza].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <NavBar />
      <h2>
        Welcome{" "}
        <small>
          {userState.user.name.first} {userState.user.name.last}
        </small>
      </h2>
      <Avatar />

      <Grid container spacing={0} justify="center" direction="row">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Allergies</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={fish} onChange={handleChange} name="fish" />} label="Fish" />
            <FormControlLabel
              control={<Checkbox checked={peanuts} onChange={handleChange} name="peanuts" />}
              label="Peanuts"
            />
            <FormControlLabel control={<Checkbox checked={dary} onChange={handleChange} name="dary" />} label="Dary" />
            <FormControlLabel
              control={<Checkbox checked={chocolate} onChange={handleChange} name="chocolate" />}
              label="Chocolate"
            />
            <FormControlLabel control={<Checkbox checked={none} onChange={handleChange} name="none" />} label="None" />
          </FormGroup>
          <FormHelperText></FormHelperText>
        </FormControl>

        <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Prefrences</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={italian} onChange={handleChange} name="italian" />}
              label="Italian"
            />
            <FormControlLabel
              control={<Checkbox checked={steak} onChange={handleChange} name="steak" />}
              label="Steak"
            />
            <FormControlLabel
              control={<Checkbox checked={vegies} onChange={handleChange} name="vegies" />}
              label="Vegies"
            />
            <FormControlLabel
              control={<Checkbox checked={fingerFoods} onChange={handleChange} name="fingerFoods" />}
              label="Finger Foods"
            />
            <FormControlLabel
              control={<Checkbox checked={pizza} onChange={handleChange} name="pizza" />}
              label="Pizza"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
        </FormControl>
      </Grid>
    </div>
  );
}

export default Profile;
