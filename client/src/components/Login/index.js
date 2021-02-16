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
import MailIcon from "@material-ui/icons/Mail";


class Login extends React.Component {
constructor(props) {
super(props);
this.state = { username: "", password:"", authflag:1 };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
this.setState({ username: event.state.username, password: event.state.password });
}
handleSubmit(event) {
event.preventDefault();
if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
this.props.history.push("/home");
} else {
alert('Incorrect Credentials!');
}
}
render() {
return (
<div>
<AppBar position="static" alignitems="center" color="primary">
<Toolbar>
<Grid container justify="center" wrap="wrap">
<Grid item>
<Typography variant="h6">Hosting Party</Typography>
</Grid>
</Grid>
<IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
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
};
}
export default Login;