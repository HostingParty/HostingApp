import React, { useContext, useState } from "react";
import "./style.css";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import API from "../../utils/API";
// import { Context } from "../../utils/Store";
import { useStoreContext } from "../../utils/globalState";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({});
  const [error, setError] = useState({ show: false, message: "" });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const handleChange = (event) => {
    let { name } = event.target;
    setUserLoginInfo({ ...userLoginInfo, [name]: event.target.value });

    if (userLoginInfo.email && userLoginInfo.password) {
      setIsBtnDisabled(false);
    }
  };

  const handleSuccessLogin = async (id) => {
    API.getUserInfo(id).then((data) => {
      let user = data.data.data[0];

      user = {
        ...user,
        password: "",
      };

      dispatch({ type: "SET_USER", payload: user });
    });
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
        handleSuccessLogin(_id).then((data) => {
          history.push("/profile");
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
                  Login to your acccount
                </Typography>
              </Grid>
              {error.show && (
                <Alert variant="outlined" severity="warning">
                  {error.message}
                </Alert>
              )}
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
                        disabled={isBtnDisabled}
                        onClick={(e) => handleSubmit(e)}
                      >
                        Login
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
