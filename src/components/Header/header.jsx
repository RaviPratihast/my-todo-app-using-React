import React from "react";
import { useLocation } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { Search, Navbar } from "../index-component";
import "./header.css";

function Header() {
  const location = useLocation();
  const isNotes = location.pathname === "/notes";

  return (
    <>
      <header className="header-component">
        <h2 className="Logo-text">
          personal<span>Note</span>
          <CreateIcon />
        </h2>

        {isNotes && <Search />}

        <Navbar />
      </header>
    </>
  );
}

export { Header };
