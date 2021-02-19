import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Events } from "./pages/events"
import { Event } from "./pages/event"; //development only
import Profile from "./pages/Profile/index";
import Recipe  from "./pages/recipe";
import logo from './logo.svg';
import './App.css';
// import {CreateUser} from "./pages/CreateUser";
import CreateEvent from "./pages/CreateEvent/index"
import Login from "./pages/Login/index";
import Nav from "./components/Nav/index";
import { StoreProvider } from "./utils/globalState";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={CreateUser} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/event" component={Event} /> 
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/recipe" component={Recipe} />
        </Switch>
      </StoreProvider>
  </Router>
  );
}

export default App;
