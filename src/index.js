import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesProvider } from "./Context/NoteContext";
import { AuthProvider } from "./Context/AuthContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <NotesProvider>
      <Router>
        <App />
      </Router>
    </NotesProvider>
  </AuthProvider>
);
