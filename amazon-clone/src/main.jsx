import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DataProvider from "./Components/Context/DataProvider.jsx";

import { initialState, reducer } from "./utils/reducer.js";

// Use Vite's BASE_URL environment variable to set basename dynamically
const basename = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
