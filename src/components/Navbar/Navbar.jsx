import React from "react";
import { LiaFilterSolid } from "react-icons/lia";
// import { MdDarkMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <LiaFilterSolid className="icon filter-icon" />
        </li>
        {/* <li>
          <MdDarkMode className="icon" />
        </li> */}
        <li>
          <CiLogin className="icon" />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
