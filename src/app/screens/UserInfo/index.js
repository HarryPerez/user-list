import React, { useState } from "react";
import { useQuery } from "react-query";

import { getUsers } from "../../../services/UserService";

import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";
import UserCard from "./components/UserCard";

import { getUserInfo } from "./utils";

import "./styles.css";

function UserInfo() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("userName");
  const { data } = useQuery("users", getUsers);
  const users = data?.data.results || [];

  const handleSetFilter = (value) => setFilter(value);
  const handleSetSort = (value) => setSort(value);

  const filterUserByAll = () =>
    users.filter((user) => {
      const userValues = getUserInfo(user);
      const hasAnyMatch = Object.values(userValues).find((value) => {
        if (typeof value !== "object") {
          return value.toLowerCase().includes(filter.toLowerCase());
        }
        return false;
      });
      return hasAnyMatch;
    });

  const sortUsers = (filteredUsers) =>
  filteredUsers.sort((userA, userB) => {
      const userAValues = getUserInfo(userA);
      const userBValues = getUserInfo(userB)
      if(userAValues[sort] < userBValues[sort]){
        return -1;
      }else if(userAValues[sort] > userBValues[sort]) {
        return 1
      }
      return 0;
    });

  const filteredUsers = filter !== "" ? filterUserByAll() : users;
  const sortedUsers = sort !== "" ? sortUsers(filteredUsers) : filteredUsers;

  return (
    <div className="user-info-container">
      <SearchBar onHandleChange={handleSetFilter} />
      <SortBar onHandleChange={handleSetSort}/>
      {sortedUsers?.map(
        (user) => user.id.value && <UserCard key={user.id.value} user={user} />
      )}
    </div>
  );
}

export default UserInfo;
