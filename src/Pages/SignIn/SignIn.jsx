import React, { useState } from "react";
import { Button } from "../../components/index-component";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import "./SignIn.css";

const SignIn = () => {
  const panelBackground = `${process.env.PUBLIC_URL}/image-landing.jpeg`;
  const navigate = useNavigate();
  const { stateAuth, dispatchAuth } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSignUp(event) {
    event.preventDefault();
    const normalizedEmail = formState.email.trim().toLowerCase();

    if (formState.password !== formState.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const isUserExisting = stateAuth.users.some(
      (user) => user.user.toLowerCase() === normalizedEmail
    );
    if (isUserExisting) {
      setErrorMessage("User already exists. Please log in.");
      return;
    }

    dispatchAuth({
      type: "SIGN_IN",
      payload: { user: normalizedEmail, password: formState.password },
    });
    setErrorMessage("");
    toast.success("Account created successfully", { autoClose: 700 });
    navigate("/login");
  }

  return (
    <div className="auth-page auth-page-sign-up">
      <div className="form-container">
        <p className="auth-kicker">PersonalNote</p>
        <h2>Sign up</h2>
        <p className="auth-subtitle">
          Create your account and start capturing notes instantly.
        </p>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errorMessage ? <p className="auth-error">{errorMessage}</p> : null}
          <Button className="login-button" type="submit">
            Create Account
          </Button>
        </form>
        <p>
          Already have an account?
          <span onClick={() => navigate("/login")}> Log in</span>
        </p>
      </div>
      <div
        className="auth-panel auth-panel-sign-up"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.42), rgba(251, 251, 254, 0.6)), url(${panelBackground})`,
        }}
      >
        <h3>Searchable by default</h3>
        <p>
          Your note workspace now follows a cleaner mono-first UI language across
          auth and app screens.
        </p>
      </div>
    </div>
  );
};

export { SignIn };
