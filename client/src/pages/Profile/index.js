import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/globalState";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../components/Avatar/index";
import { Grid, Paper, FormLabel, FormControl } from "@material-ui/core";
import FriendList from "../../components/FriendList/friend-list.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 30,
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
          {state.user && <FriendList userId={state.user._id} friends={state?.user?.friends} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
