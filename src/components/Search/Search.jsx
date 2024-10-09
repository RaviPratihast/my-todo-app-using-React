import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <div className="Search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">🔍</button>
    </div>
  );
};

export {Search};
