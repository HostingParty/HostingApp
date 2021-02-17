import React from "react";
import logo from './logo.svg';
import './App.css';
import CreateUser from "./components/CreateUser/index";
import Login from "./components/Login/index";
import CreateEvent from "./components/CreateEvent";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { createStackNavigator, createSwitchNavigator } from "react-navigation";

// const AuthNavigator = createStackNavigator(
//   {
//     Login: { screen: Login },
//     Register: { screen: CreateEvent }
//   },
//   {
//     headerMode: "none"
//   }
// );

// const SwitchNavigator = createSwitchNavigator(
//   {
//     Login: AuthNavigator,
//   }
// )



function App() {
  return (
    <Router>
    <div className="App">
      {/* <SwitchNavigator /> */}
     <Route exact path="/" component={CreateUser} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/createEvent" component={CreateEvent} />
    </div>
    </Router>
  );
}

export default App;
