import React from "react";
import { FaPen } from "react-icons/fa";
import "./LandingPage.css";
import { Button } from "../../components/index-component";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const { StateAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="home-wrapper">
        <div className="home-content">
          <div className="home-text">
            <h1>
              Personal<span>Note</span>
              <FaPen className="note-icon" />
            </h1>
            <p>Your thoughts, your space, your way.</p>
          </div>
          <Button
            onClick={() =>
              StateAuth && StateAuth.loggedIn
                ? navigate("/notes")
                : navigate("/login")
            }
            className="button-getting-started"
          >
            Get Started
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
