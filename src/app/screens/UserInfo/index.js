import React, { useState, useContext } from "react";

import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";

import { UserContext } from "../../context";

import { getUserInfo } from "./utils";

import "./styles.css";

function UserInfo() {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState("userName");
  const [editUser, setEditUser] = useState();
  const users = useContext(UserContext) || [];

  const handleSetFilter = (value) => setFilter(value);
  const handleSetSort = (value) => setSort(value);

  const onHandleSave = (updateUser) => {
    users[editUser.index] = updateUser;
    setIsOpen(false);
  };

  const setModalIsOpen = (user, index) => {
    setIsOpen(true);
    setEditUser({
      user: user,
      index: index
    });
  };

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
      const userBValues = getUserInfo(userB);
      if (userAValues[sort] < userBValues[sort]) {
        return -1;
      } else if (userAValues[sort] > userBValues[sort]) {
        return 1;
      }
      return 0;
    });

  const filteredUsers = filter !== "" ? filterUserByAll() : users;
  const sortedUsers = sort !== "" ? sortUsers(filteredUsers) : filteredUsers;

  return (
    <div className="user-info-container">
      <SearchBar onHandleChange={handleSetFilter} />
      <SortBar onHandleChange={handleSetSort} />
      {sortedUsers?.map(
        (user, index) =>
          user.id.value && (
            <UserCard
              key={user.id.value}
              user={user}
              index={index}
              setModalIsOpen={setModalIsOpen}
            />
          )
      )}
      {editUser && (
        <UserModal
          user={editUser.user}
          isOpen={isOpen}
          onHandleSave={onHandleSave}
        />
      )}
    </div>
  );
}

export default UserInfo;
