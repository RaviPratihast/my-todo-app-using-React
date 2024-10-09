import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Search.css";
const Search = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <CiSearch className="search-button-icon" />
      </button>
    </div>
  );
};

export { Search };
