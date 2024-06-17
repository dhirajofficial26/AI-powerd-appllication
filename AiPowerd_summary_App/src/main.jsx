import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import summaryStore from "./store/summarystore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={summaryStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
