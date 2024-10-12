import React from "react";
import { Button } from "../../components/index-component";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  // const { location } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <h2>Sign In</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="login-button">Sign In</Button>
        {/* <Button className="login-button">Guest Login</Button> */}
      </form>
      <p>
        Already have an account?
        <span onClick={() => navigate("/login")}>Log In</span>
      </p>
    </div>
  );
};

export { SignIn };
