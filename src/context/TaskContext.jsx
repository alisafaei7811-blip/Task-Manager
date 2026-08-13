import React, { createContext, useEffect, useReducer, useState } from "react";
import { Reducer } from "../Reducer/Reducer";

// Context
export const UseContext = createContext();

// Provider
export const TaskProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("Data")) || [];
  const [state, dispatch] = useReducer(Reducer,data);
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
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(state));
  }, [state]);


  return <UseContext.Provider value={value}>{children}</UseContext.Provider>;
};
