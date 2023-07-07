import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import UserList from "../../components/UserComps/UserList";
import { getAuthToken } from "../../util/Auth";

function AllUsers() {
  const users = useRouteLoaderData("users");
  return (
    <React.Fragment>
      <UserList users={users} />
    </React.Fragment>
  );
}

export default AllUsers;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch("/user", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw json({ message: "Cant get users" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}
