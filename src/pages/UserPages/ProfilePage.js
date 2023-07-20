import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import ShowUserProfile from "../../components/UserComps/ShowUserProfile";
import { getAuthToken } from "../../util/Auth";

function ProfilePage() {
  const user = useRouteLoaderData("profile");
  return (
    <React.Fragment>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <ShowUserProfile user={user} />
      </div>
      </main>
    </React.Fragment>
  );
}

export default ProfilePage;

export async function loader({ request }) {
  let url = "/current_user";
  const token = getAuthToken();
  const response = await fetch(url, {
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
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData)
  return resData;
}


