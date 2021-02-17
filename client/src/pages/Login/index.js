import React from "react";
import "./style.css";
import NavBar from "../../components/Nav/index";
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
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import API from "../../utils/API";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", authflag: 1 };
  }

  handleChange = (event) => {
    let { name } = event.target;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { email, password } = this.state;
    let user = {
      email,
      password,
    };

    let response = await API.login(user);

    console.log(response);
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
                          onChange={(e) => this.handleChange(e)}
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
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          id="submitBtn"
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                          onClick={(e) => this.handleSubmit(e)}
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
  }
}
export default Login;
