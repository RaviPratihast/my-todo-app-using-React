import React, { useState } from "react";
import { Button } from "../../components/index-component";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const panelBackground = `${process.env.PUBLIC_URL}/image-landing.jpeg`;
  const navigate = useNavigate();
  const location = useLocation();
  const { stateAuth, dispatchAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleGuestLogin() {
    setErrorMessage("");
    dispatchAuth({
      type: "GUEST_USER_LOGGED_IN",
      payload: { loggedIn: true, currentUser: "Guest" },
    });
    const defaultPathName = "/notes";
    navigate(location?.state?.from?.pathname || defaultPathName, {
      replace: true,
    });
    toast.success("Welcome,Guest", { autoClose: 500 });
  }

  function handleLogin(event) {
    event.preventDefault();
    const hasMatchedUser = stateAuth.users.some(
      (user) =>
        user.user.toLowerCase() === credentials.email.trim().toLowerCase() &&
        user.password === credentials.password
    );

    if (!hasMatchedUser) {
      setErrorMessage("Invalid email or password.");
      return;
    }

    setErrorMessage("");
    dispatchAuth({
      type: "USER_LOGGED_IN",
      payload: { loggedIn: true, currentUser: credentials.email.trim() },
    });
    const defaultPathName = "/notes";
    navigate(location?.state?.from?.pathname || defaultPathName, {
      replace: true,
    });
    toast.success("Logged in successfully", { autoClose: 700 });
  }

  return (
    <div className="auth-page">
      <div className="form-container">
        <p className="auth-kicker">PersonalNote</p>
        <h2>Log in</h2>
        <p className="auth-subtitle">
          Continue where you left off. Structured notes, fast retrieval.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          {errorMessage ? <p className="auth-error">{errorMessage}</p> : null}
          <Button className="login-button" type="submit">
            Login
          </Button>
          <Button className="login-button auth-secondary" onClick={handleGuestLogin}>
            Guest Login
          </Button>
        </form>
        <p>
          Do not have an account?
          <span onClick={() => navigate("/signIn")}> Sign up</span>
        </p>
        <div className="auth-meta">
          Demo user: <strong>a</strong> / <strong>1</strong>
        </div>
      </div>
      <div
        className="auth-panel"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.42), rgba(251, 251, 254, 0.6)), url(${panelBackground})`,
        }}
      >
        <h3>From Login to Shipping</h3>
        <p>
          Interface refreshed to a compact mono editorial style inspired by your
          second reference.
        </p>
      </div>
    </div>
  );
};

export { Login };
