import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNotes } from "../../Context/NoteContext";
import "./Search.css";

const Search = () => {
  const { dispatch } = useNotes();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    dispatch({ type: "SET_SEARCH_QUERY", payload: query.toLowerCase() });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: "SET_SEARCH_QUERY",
        payload: searchInput.toLowerCase(),
      });
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by title..."
        value={searchInput}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <CiSearch className="search-button-icon" />
    </div>
  );
};

export { Search };
