// setup data layer

import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//how to use it inside of a component
export const useStateValue = () => useContext(StateContext);
