// import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

// function Nav() {
//   const [store] = useStoreContext();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="/">
//         Your personal CMS
//       </a>
//       {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
//     </nav>
//   );
// }

// export default Nav;

import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  Drawer, 
  AppBar, 
  Toolbar, 
  CssBaseline, 
  List, 
  Typography, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
      } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventIcon from '@material-ui/icons/Event';
import PersonIcon from '@material-ui/icons/Person';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Events } from "events";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Hosting Party
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <List>
            <ListItem component={ Link } to="/createEvent"> 
              Events
            </ListItem>
            <ListItem component={ Link } to="/profile">
              Profile
            </ListItem>
            <ListItem component={ Link } to="/recipe">
              Recipes
            </ListItem>
            <ListItem component={ Link } to="/login">
              Login
            </ListItem>           
            <ListItem component={ Link } to="/">
              Log Out
            </ListItem>
          </List>

        {/* <List>
          {['Events', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <EventIcon /> : <PersonIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          {['Recipes', 'Log Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FastfoodIcon /> : <ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <Divider />
      </Drawer>
    </div>
  );
}
