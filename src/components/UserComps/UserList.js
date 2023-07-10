import React from "react";
import { json } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <React.Fragment>
      {users.map((user) => (
        <Link to={`./${user.id}`}>
          <p>{user.username}</p>
        </Link> 
      ))}
    </React.Fragment>
  );
}

export default UserList;
