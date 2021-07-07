import React from "react";

import "./styles.css";

function UserCard({ user }) {
  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const location = `${user.location.city} ${user.location.state} ${user.location.country}`;
  const { picture, email } = user;

  console.log(user);

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
          <div className="user-text">{userName}</div>
          <div className="user-text">{userName}</div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
