import { createContext, useReducer } from "react";
import { initialState, reducer } from "../../utils/reducer";

export const DataContext = createContext();

function DataProvider({ children }) {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
