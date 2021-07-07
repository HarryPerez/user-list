import React, { useState } from "react";
import { useQuery } from "react-query";

import { getUsers } from "../../../services/UserService";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

import { getUserInfo } from "./utils";

import "./styles.css";

function UserInfo() {
  const [filter, setFilter] = useState("");
  const { data } = useQuery("users", getUsers);
  const users = data?.data.results || [];

  const handleSetFilter = (value) => setFilter(value);

  const filterUserByAll = () =>
    users.filter((usr) => {
      const userValues = getUserInfo(usr);
      const hasAnyMatch = Object.values(userValues).find((value) => {
        if (typeof value !== "object") {
          return value.toLowerCase().includes(filter.toLowerCase());
        }
        return false;
      });
      return hasAnyMatch;
    });

  const filteredUsers = filter !== "" ? filterUserByAll() : users;

  return (
    <div className="user-info-container">
      <SearchBar onHandleChange={handleSetFilter} />
      {filteredUsers?.map(
        (user) => user.id.value && <UserCard key={user.id.value} user={user} />
      )}
    </div>
  );
}

export default UserInfo;
