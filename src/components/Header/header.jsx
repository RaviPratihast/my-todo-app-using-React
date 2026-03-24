import React from "react";
import { useLocation } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { useAuth } from "../../Context/AuthContext";
import { Search, Navbar } from "../index-component";
import "./header.css";

function Header() {
  const location = useLocation();
  const isNotes = location.pathname === "/notes";
  const { stateAuth } = useAuth();

  function getInitials(name) {
    if (!name) {
      return "U";
    }
    const segments = name.trim().split(/\s+/);
    const initials = segments
      .slice(0, 2)
      .map((segment) => segment.charAt(0).toUpperCase())
      .join("");
    return initials || "U";
  }

  return (
    <>
      <header className="header-component">
        <div className="mobile-avatar-slot">
          {stateAuth.loggedIn ? (
            <div className="mobile-header-avatar" title={stateAuth.currentUser || "User"}>
              {getInitials(stateAuth.currentUser)}
            </div>
          ) : (
            <div className="mobile-header-avatar-placeholder" />
          )}
        </div>

        <h2 className="Logo-text">
          personal<span>Note</span>
          <CreateIcon />
        </h2>

        {isNotes ? <Search /> : null}

        <Navbar />
      </header>
    </>
  );
}

export { Header };
