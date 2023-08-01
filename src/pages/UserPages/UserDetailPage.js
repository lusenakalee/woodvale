import React from 'react'
import UserItem from '../../components/UserComps/UserItem'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import { getAuthToken } from '../../util/Auth'

function UserDetailPage() {
  const user = useRouteLoaderData("user-detail")
  return (
    <React.Fragment>
        <UserItem user={user}/>
    </React.Fragment>
  )
}

export default UserDetailPage

export async function loader({ request, params }) {
  let url = "https://woodvale-test-2.onrender.com/user/";
  const token = getAuthToken();
  const id = params.id;
  const response = await fetch(url + id, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server error" }, { status: 500 });
  }

  const resData = await response.json();
  ;
  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();

  const id = params.id;
  const response = await fetch("https://woodvale-test-2.onrender.com/user/" + id, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (response.status === 404) {
    return response;
  }
  if (response.status === 400) {
    return response;
  }
  if (!response.ok) {
    throw json(
      { message: "Could not delete user." },
      {
        status: 500,
      }
    );
  }
  return redirect("/login/team");
}
