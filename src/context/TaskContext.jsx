import { createContext, useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

export const UseContext = createContext();

export function TaskContext({ children }) {
  const [state, dispatch] = useReducer(Reducer, []);

  return (
    <UseContext.Provider value={{ state, dispatch }}>
      {children}
    </UseContext.Provider>
  );
}
