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
import { Header } from "./components/index-component.js";

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
      <ToastContainer
        position="bottom-right"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable={false}
        theme="light"
        icon={false}
        closeButton={false}
        containerClassName="app-toast-container"
        toastClassName="app-toast"
        bodyClassName="app-toast-body"
        progressClassName="app-toast-progress"
      />
    </>
  );
}

export default App;
