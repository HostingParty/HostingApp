import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Events } from "./pages/events"
import { Profile } from "./pages/profile"
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/index";
import Nav from "./components/Nav/index";
import { StoreProvider } from "./utils/globalState";

function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Nav />
        <Switch>
          <Route exact path="/events" component={Events} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </StoreProvider>
    </div>
  </Router>
    // <div className="App">
     
    //   <Nav />

    //  {/* <Login></Login> */}
    // </div>
  );
}

export default App;
