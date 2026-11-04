import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommitteePage from "./CommitteePage";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {path === "/committee" || path === "/committees" ? (
      <CommitteePage />
    ) : (
      <App />
    )}
  </React.StrictMode>
);
