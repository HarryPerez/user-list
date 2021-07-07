import React from "react";

import "./styles.css";

function SearchBar({ onHandleChange }) {
  const handleChange = (e) => onHandleChange(e.target.value);

  return (
    <input
      onChange={handleChange}
      placeholder="Please tipe something"
      className="search-bar"
    />
  );
}

export default SearchBar;
