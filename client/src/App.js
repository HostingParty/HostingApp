import React from "react";
import logo from './logo.svg';
import './App.css';
import CreateUser from "./components/SignUp/index";
import Login from "./components/Login/index";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={CreateUser} />
     <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
