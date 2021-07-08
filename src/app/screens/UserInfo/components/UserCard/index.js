import React from "react";

import EditIcon from "../../../../assets/edit.png";

import { getUserInfo } from "../../utils";

import "./styles.css";

function UserCard({ user, setModalIsOpen, index }) {
  const { userName, location, picture, email, phone } = getUserInfo(user);

  const handleSetEdit = () => setModalIsOpen(user, index);

  return (
    <div className="user-card-container">
      <div className="user-card-header-container">
        <div className="user-card-header">
          <div className="user-name">{userName}</div>
          <img
            className="edit-icon"
            alt={`edit-user${user.id.value}`}
            src={EditIcon}
            onClick={handleSetEdit}
          />
        </div>
      </div>
      <div className="user-card-body">
        <div className="user-pic-container">
          <img
            className="user-pic"
            alt={`user-pic${user.id.value}`}
            src={picture.large}
          />
        </div>
        <div className="user-description">
          <div className="user-text">{email}</div>
          <div className="user-text">{location}</div>
          <div className="user-text">{phone}</div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
