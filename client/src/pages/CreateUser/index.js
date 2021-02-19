import React from "react";
import "./style.css";
import { Button, TextField, Grid, Paper, Typography, Link } from "@material-ui/core";
import API from "../../utils/API";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (event) => {
    let { name } = event.target;

    this.setState({ [name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let { firstName, lastName, email, password, phone } = this.state;
    let user = {
      name: {
        first: firstName,
        last: lastName,
      },
      email: email,
      password: password,
      phone: phone,
    };

    try {
      let response = await API.registerUser(user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid container direction="column" justify="center" spacing={2} className="login-form">
              <Paper variant="elevation" elevation={2} className="login-background">
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item>
                  <form>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          variant="outlined"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          variant="outlined"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          variant="outlined"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Email"
                          variant="outlined"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="password"
                          name="password"
                          type="text"
                          placeholder="Password"
                          variant="outlined"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <Link to="/login">
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="button-block"
                            onClick={(e) => this.handleSubmit(e)}
                          >
                            Submit
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link
                    to="/login"
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Login
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CreateUser;
