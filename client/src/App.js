import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Events } from "./pages/events";
import { Profile } from "./pages/profile";
import { Recipe } from "./pages/recipe";
import Login from "./pages/Login/index";
import CreateUser from "./pages/CreateUser/index";
import CreateEvent from "./pages/CreateEvent/index";
import logo from "./logo.svg";
import "./App.css";
// import CreateUser from "./pages/CreateUser/index";
// import Login from "./pages/Login/index";
import Nav from "./components/Nav/index";
import { StoreProvider } from "./utils/globalState";
import Store, { Context } from "./utils/Store";

function App() {
  return (
    <Router>
      <div>
        <Store>
          <Nav />
          <Switch>
            <Route exact path="/" component={CreateUser} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createEvent" component={CreateEvent} />

            <Route exact path="/events" component={Events} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/recipe" component={Recipe} />
          </Switch>
        </Store>
      </div>
    </Router>
    // <div className="App">

    //   <Nav />

    //  {/* <Login></Login> */}
    // </div>
  );
}

export default App;
