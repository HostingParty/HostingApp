import React, { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import API from "../utils/API";
import { useStoreContext } from "../utils/globalState";
import { useHistory } from "react-router-dom";
import PeopleListModal from "../components/PeopleModal"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const MakeEvent = () => {
  const classes = useStyles();
  const [eventInfo, setEventInfo] = useState({
    title: "",
    description: "",
    eventDate: getTime("today"),
    startTime: getTime("start"),
    endTime: getTime("end"),
    pending: [],
  });
  const [error, setError] = useState({ show: false, message: "" });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  function getTime(value) {
    let today = new Date();
    switch (value) {
      case "today":
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
      case "start":
        return today.toLocaleTimeString('en-US', { hour12: false }).slice(0,5);
      case "end":
        today.setHours(today.getHours() + 2);
        return today.toLocaleTimeString('en-US', { hour12: false }).slice(0,5);
    };
  }

  const handleChange = (event) => {
    let { name } = event.target;
    setEventInfo({ ...eventInfo, [name]: event.target.value });

    if (eventInfo.title && eventInfo.description && eventInfo.eventDate) {
      setIsBtnDisabled(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("In makeEvent, About to create a new event: ", eventInfo)
      let response = await API.addEvent(
        {...eventInfo, hosting: [state.user._id]}
      );
      const { _id } = response.data.data;

      if (_id) {
        // API.textUser("+12064120323")
        //   .then((data) => {
        //     console.log("After textUser, res is: ", data)
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        await API.updateUserEvents(state.user._id, _id)
          .then((data) => {
            dispatch({ type: "SET_USER", payload: data.data.data });
          })
          .catch((err) => {
            console.log(err);
          });
          history.push("/events");
      } else {
        setError({ show: true, message: response.data.message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid container direction="column" justify="center" spacing={2} className="login-form">
            <Paper variant="elevation" elevation={2} className="login-background">
              <Grid item>
                <Typography component="h1" variant="h5">
                  Create Your Event!
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        id="title"
                        type="text"
                        placeholder="Event Title"
                        fullWidth
                        name="title"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="description"
                        type="text"
                        placeholder="Event Description"
                        fullWidth
                        name="description"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="eventDate"
                        type="date"
                        defaultValue={eventInfo.eventDate}
                        fullWidth
                        name="eventDate"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="startTime"
                        type="time"
                        fullWidth
                        name="startTime"
                        variant="outlined"
                        defaultValue={eventInfo.startTime}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="endTime"
                        type="time"
                        fullWidth
                        name="endTime"
                        variant="outlined"
                        defaultValue={eventInfo.endTime}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      {state.user.friends 
                      ? <PeopleListModal friends={state.user.friends} eventInfo={eventInfo} setEventInfo={setEventInfo}></PeopleListModal> :
                      <Typography>No friends found, add your friends in profile page</Typography>
                      }
                    </Grid>
                    <Grid item>
                      <Button
                        id="submitBtn"
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                        disabled={isBtnDisabled}
                        onClick={(e) => handleSubmit(e)}
                      >
                        Create Event
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MakeEvent;
