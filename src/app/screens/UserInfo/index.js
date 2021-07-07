import React, { useState } from "react";
import { useQuery } from "react-query";

import { getUsers } from "../../../services/UserService";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import "./styles.css";

function UserInfo() {
  const [filter, setFilter] = useState("");
  const { data } = useQuery("users", getUsers);
  const users = data?.data.results || [];

  const handleSetFilter = (value) => setFilter(value);

  console.log(filter);
  return (
    <div className="user-info-container">
      <SearchBar onHandleChange={handleSetFilter} />
      {users.map(
        (user) => user.id.value && <UserCard key={user.id.value} user={user} />
      )}
    </div>
  );
}

export default UserInfo;
