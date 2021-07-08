import React from "react";
import {USER_FIELDS} from './constants'

import "./styles.css";

function SortBar({ onHandleChange }) {
  const handleChange = (e) => onHandleChange(e.target.value);

  return (
    <select
      onChange={handleChange}
      placeholder="Pick one field"
      className="sort-bar"
    >
      {USER_FIELDS.map(userField => <option key={userField.value} value={userField.value}>{userField.label}</option>)}
      </select>
  );
}

export default SortBar;
