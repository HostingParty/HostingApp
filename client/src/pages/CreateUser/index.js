import React from "react";
import "./style.css";
import NavBar from "../../components/Nav/index";
import Login from "../Login/index";
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
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function CreateUser() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

    return (
        <div>
  <NavBar />
<Grid container spacing={0} justify="center" direction="row">
<Grid item>
<Grid container direction="column" justify="center" spacing={2} className="login-form"
>
<Paper variant="elevation" elevation={2} className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
Create User
</Typography>
</Grid>
<Grid item>
<form>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField id="pic" type="url" placeholder="Upload Profile Picture" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField id="name" type="text" placeholder="Full Name" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField id="phNumber" type="text" placeholder="Phone Number" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField id="email" type="text" placeholder="Email" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField id="password" type="text" placeholder="Password" variant="outlined" 
/>
</Grid>
<Grid item>
    <Link to="/login">
<Button variant="contained" color="primary" type="submit" className="button-block"
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
    )
}

export default CreateUser;