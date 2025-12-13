import react, { Children, createContext, useReducer } from "react";
export const DataContext = createContext();
const DataProvider = ({Children, reducer, initialState}) => {
  return (
    <DataProvider.provider value={useReducer(reducer, initialState)}>{Children}</DataProvider.provider>
  );
};
