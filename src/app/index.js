import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { getUsers } from "../services/UserService";

import UserInfo from "./screens/UserInfo";
import { UserContext } from "./context";

import "./app.css";

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (!users) {
      getUsers().then((data) => setUsers(data?.data.results || []));
    }
  });

  return (
    <UserContext.Provider value={users}>
      {!users ? (
        <div className="loader-container">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <UserInfo />
      )}
    </UserContext.Provider>
  );
}
