import React, { useContext, useState } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import API from "../utils/API";
import { useStoreContext } from "../utils/globalState";
import { useHistory } from "react-router-dom";
import PeopleListModal from "../components/PeopleModal"

const MakeEvent = () => {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    description: "",
    eventDate: "",
    pending: [],
  });
  const [error, setError] = useState({ show: false, message: "" });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  //Testing only will come on user obj
  //get from user friend list
  // const [friends, setFriends] = useState([
  //   {name: 'Brandon'}, 
  //   {name: 'Ben'},
  //   {name: 'Maranda'},
  //   {name: 'Brandon'},
  // ]);

  const handleChange = (event) => {
    let { name } = event.target;
    setEventInfo({ ...eventInfo, [name]: event.target.value });

    if (eventInfo.title && eventInfo.description && eventInfo.eventDate) {
      setIsBtnDisabled(false);
    }
  };

  const handleSuccessCreateEvent = async (_id) => {
    API.getUserInfo(_id).then((data) => {
      let user = data.data.data[0];

      user = {
        ...user,
        password: "",
      };

      //refreshes events on user
      dispatch({ type: "SET_USER", payload: user }); 
      setError({ show: false, message: "" });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await API.addEvent(
        {...eventInfo, hosting: [state.user._id]}
      );
      console.log("from make event:", response.data)
      const { _id } = response.data;

      if (_id) {
        handleSuccessCreateEvent(_id).then((data) => {
          history.push("/events");
        });
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
                        placeholder="Event Date"
                        fullWidth
                        name="eventDate"
                        variant="outlined"
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
