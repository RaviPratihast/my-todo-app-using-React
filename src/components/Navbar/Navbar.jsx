import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>Filter</li>
        <li>Dark Mode</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export { Navbar };
