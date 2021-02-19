import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

// This is our initial state
const initialState = {
  user: {},
};

// This provides all child components with access to a global instance of state
// State can be updated using a dispatch function provided by useReducer()
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);

export default Store;
