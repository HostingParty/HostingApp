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


function NavBar() {
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
          <Badge color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
</Toolbar>
</AppBar>
</div>
)
}

export default NavBar;