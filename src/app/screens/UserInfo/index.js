import React from "react";
import { useQuery } from "react-query";

import { getUsers } from "../../../services/UserService";

import UserCard from "./components/UserCard";

import "./styles.css";

function UserInfo() {
  const { data } = useQuery("users", getUsers);
  const users = data?.data.results || [];

  return (
    <div className="user-info-container">
      {users.map(
        (user) => user.id.value && <UserCard key={user.id.value} user={user} />
      )}
    </div>
  );
}

export default UserInfo;
