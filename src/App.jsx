import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LandingPage,
  Notes,
  Label,
  Archive,
  Bin,
  Login,
  SignIn,
} from "./Pages/Pages-index.js";

// import "./App.css";
import { Header, Sidenav } from "./components/index-component.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Bin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
