import React, { createContext, useReducer, useState } from "react";

// Reducer
export const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((item) => item.id !== action.payload);

    case "isCompleted":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

// Context
export const UseContext = createContext();

// Provider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, []);
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  const value = {
    state,
    dispatch,
    status,
    setStatus,
    search,
    setSearch,
  };

  return <UseContext.Provider value={value}>{children}</UseContext.Provider>;
};
