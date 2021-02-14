import React from "react";
import logo from './logo.svg';
import './App.css';
import CreateUser from "./components/CreateUser/index";
import Login from "./components/Login/index";
import CreateEvent from "./components/CreateEvent";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={CreateUser} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/createEvent" component={CreateEvent} />
    </div>
    </Router>
  );
}

export default App;
