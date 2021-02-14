import React from "react";
import "./style.css";
import NavBar from "../Nav/index"
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
import MailIcon from '@material-ui/icons/Mail';


function Login() {
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
Login
</Typography>
</Grid>
<Grid item>
<form>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField type="email" placeholder="Email" fullWidth name="username" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField type="password" placeholder="Password" fullWidth name="password" variant="outlined" 
/>
</Grid>
<Grid item>
<Button variant="contained" color="primary" type="submit" className="button-block"
>
Submit
</Button>
</Grid>
</Grid>
</form>
</Grid>
<Grid item>
<Link href="#" variant="body2">
Forgot Password?
</Link>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>

        </div>
    )
}

export default Login;