import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DataProvider from "./Components/Context/DataProvider.jsx";
 
 
import { initialState, reducer } from "./utils/reducer.js";


createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/amazon-Clone-2025">
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
