import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./Components/Context/DataProvider.jsx";
 
import { BrowserRouter } from "react-router-dom";
import { initialState, reducer } from "./utils/reducer.js";


createRoot(document.getElementById("root")).render( 
    <DataProvider reducer = {reducer} initialState = {initialState} > 

        <App /> 
      
    </DataProvider> 
);
