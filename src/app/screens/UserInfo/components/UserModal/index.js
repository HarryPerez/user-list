import React, { useState } from "react";
import Modal from "react-modal";

import { USER_FIELDS } from "./constants";

import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function UserModal({ isOpen, user, onHandleSave }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e, field) => {
    const userUpdate = updatedUser;
    userUpdate[field] = e.target.value;
    setUpdatedUser(userUpdate);
  };

  const handleSave = () => onHandleSave(updatedUser);

  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="User Edit Modal">
      <div className="user-form-container">
        <div>Edit User Info</div>
        {USER_FIELDS.map((userField) => (
          <input
            key={userField.field}
            onChange={(e) => handleChange(e, userField.field)}
            placeholder={userField.label}
            className="input"
          />
        ))}
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </Modal>
  );
}

export default UserModal;
