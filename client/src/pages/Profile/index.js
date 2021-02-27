import React, { useState } from "react";
import { useStoreContext } from "../../utils/globalState";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Container, Grid, Paper, FormLabel, FormControl, Button } from "@material-ui/core";
import FriendListContainer from "../../components/FriendListContainer/friend-list-container.component";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
  },
  mx: {
    marginLeft: 18,
    marginTop: 16,
  },
  paper: {
    borderTop: "3px solid #2196F3",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 18,
    marginTop: 16,
  },
  button: {
    padding: 1,
    marginTop: 5,
    fontSize: 10,
    background: "#ccc",
  },
}));

function Profile() {
  const classes = useStyles();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [state, dispatch] = useStoreContext();

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    await axios.post("/api/v1/upload-photo", formData, { headers: headers });
  };

  const cancelUpload = (e) => {
    e.preventDefault();
    setImage({ preview: "", raw: "" });
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            <Grid item sm={12}>
              <Grid container className={classes.item}>
                <Grid item className={classes.avatar}>
                  <label htmlFor="upload-button">
                    {!image.preview ? (
                      <Avatar src={state?.user?.profilePic} className={classes.large} />
                    ) : (
                      <Avatar src={image.preview} className={classes.large} />
                    )}
                  </label>
                  <input type="file" id="upload-button" style={{ display: "none" }} onChange={handleChange} />
                  <small>Click to change</small>
                  {image.preview && (
                    <div className="buttons">
                      <Button className={classes.button} onClick={handleUpload}>
                        Upload
                      </Button>
                      <Button className={classes.button} onClick={cancelUpload}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </Grid>
                <Grid item className={classes.mx}>
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
          {state.user && <FriendListContainer userId={state.user._id} friends={state?.user?.friends} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
