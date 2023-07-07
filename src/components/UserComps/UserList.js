import React from "react";
import { json } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function UserList({ users }) {
  return (
    <React.Fragment>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </React.Fragment>
  );
}

export default UserList;
