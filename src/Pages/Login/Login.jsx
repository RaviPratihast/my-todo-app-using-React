import React, { useState } from "react";
import { Button } from "../../components/index-component";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { stateAuth, dispatchAuth } = useAuth();

  function handleGuestLogin() {
    dispatchAuth({ type: "GUEST_USER_LOGGED_IN", payload: { loggedIn: true } });
    const defaultPathName = "/notes";
    navigate(location?.state?.from?.pathname || defaultPathName, {
      replace: true,
    });
    toast.success("Welcome,Guest", { autoClose: 500 });
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="login-button">Login</Button>
        <Button className="login-button" onClick={() => handleGuestLogin()}>
          Guest Login
        </Button>
      </form>
      <p>
        Don't have an account?
        <span onClick={()=>navigate("/signIn")}>Sign Up</span>
      </p>
    </div>
  );
};

export { Login };
