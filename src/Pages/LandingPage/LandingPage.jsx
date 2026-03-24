import React from "react";
import { FaPen } from "react-icons/fa";
import "./LandingPage.css";
import { Button } from "../../components/index-component";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const { stateAuth } = useAuth();
  const navigate = useNavigate();
  const mobileGridBackground = `${process.env.PUBLIC_URL}/Dot grid@2x.png`;

  return (
    <>
      <div className="home-wrapper" style={{ "--landing-mobile-bg": `url("${mobileGridBackground}")` }}>
        <div className="home-content">
          <div className="home-text">
            <p className="home-kicker">Monospace Workflow</p>
            <h1>
              Personal<span>Note</span>
              <FaPen className="note-icon" />
            </h1>
            <p className="home-description">
              Capture, archive, and recover ideas without breaking your flow.
            </p>
          </div>
          <Button
            onClick={() =>
              stateAuth && stateAuth.loggedIn
                ? navigate("/notes")
                : navigate("/login")
            }
            className="button-getting-started"
          >
            Open Workspace
          </Button>
        </div>

        <div className="home-image">
          <img className="image-responsive" src="/notes.svg" alt="home-hero" />
        </div>
      </div>
    </>
  );
};

export { LandingPage };
