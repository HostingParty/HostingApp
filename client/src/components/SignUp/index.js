import React from "react";
import "./style.css";
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

function CreateUser() {
    return (
        <div>
            <AppBar position="static" alignitems="center" color="primary">
<Toolbar>
<Grid container justify="center" wrap="wrap">
<Grid item>
<Typography variant="h6">Create User</Typography>
</Grid>
</Grid>
<IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
</Toolbar>
</AppBar>
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
<TextField type="email" placeholder="Upload Profile Picture" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField type="text" placeholder="Full Name" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField type="text" placeholder="Phone Number" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField type="text" placeholder="Email" variant="outlined" 
/>
</Grid>
<Grid item>
<TextField type="text" placeholder="Password" variant="outlined" 
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

export default CreateUser;