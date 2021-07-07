import React from "react";

import "./styles.css";

function UserCard({ user }) {
  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return (
    <div className="user-card-container">
      <div>{userName}</div>
    </div>
  );
}

export default UserCard;
