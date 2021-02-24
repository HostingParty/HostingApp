import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/globalState";
import "./style.css";
import API from "../../utils/API";
import NavBar from "../../components/Nav/index";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../components/Avatar/index";
import { Grid, Paper, Card, CardContent, Typography, FormLabel, FormControl, Checkbox } from "@material-ui/core";
import FriendCard from "../../components/FriendCard/friend-card.component";

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
  const [state, dispatch] = useStoreContext();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Paper>
            <Grid item sm={12}>
              <Grid container>
                <Grid item>
                  <Avatar />
                </Grid>
                <Grid item>
                  <h2>
                    {state?.user?.name?.first} {state?.user?.name?.last}
                  </h2>
                </Grid>
              </Grid>
            </Grid>

            {/* Allergies List and Add/Edit Input */}
            <Grid item sm={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Allergies</FormLabel>
              </FormControl>
            </Grid>

            {/* Preferences List and Add/Edit Input */}
            <Grid item sm={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Preferences</FormLabel>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>

        <Grid item sm={12} md={6}>
          <Paper>
            <Typography variant="h4">Friends List</Typography>
            {state?.user?.friends?.map((friend) => {
              return <FriendCard key={friend._id} friend={friend} />;
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
