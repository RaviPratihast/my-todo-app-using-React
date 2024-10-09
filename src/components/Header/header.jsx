import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Search, Navbar } from "../index-component";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        {/* The Logo */}
        <h2>
          personal<span>Note</span>
          <CreateIcon />
        </h2>

        {/* Search Bar Component */}
        <Search />
        {/* Navigation bar -> that will have three items  */}
        <Navbar />
      </header>
    </>
  );
}

export default Header;
