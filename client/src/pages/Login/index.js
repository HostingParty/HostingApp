import React, { useContext, useState } from "react";
import "./style.css";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import API from "../../utils/API";
// import { Context } from "../../utils/Store";
import { useStoreContext } from "../../utils/globalState";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({});
  const [error, setError] = useState();
  const [state, dispatch] = useStoreContext();

  const handleChange = (event) => {
    let { name } = event.target;
    setUserLoginInfo({ ...userLoginInfo, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { email, password } = userLoginInfo;
    let user = {
      email,
      password,
    };

    try {
      let response = await API.login(user);
      const { _id } = response.data;

      if (_id) {
        dispatch({ type: "SET_USER", payload: { id: _id } });
      } else {
        setError({ message: "This email address is not registered" });
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
                  Login to your acccount
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        id="email"
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="email"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="password"
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        id="submitBtn"
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit
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

export default Login;
