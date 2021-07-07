import React from "react";

import { getUserInfo } from "../../utils";

import "./styles.css";

function UserCard({ user }) {
  const { userName, location, picture, email, phone } = getUserInfo(user);

  return (
    <div className="user-card-container">
      <div className="user-card-header">
        <div className="user-name">{userName}</div>
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
