import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import LeaveDetail from "../../components/LeaveComps/LeaveDetail";
import { getAuthToken } from "../../util/Auth";

function LeaveDetailPage() {
  const leave = useRouteLoaderData("leave");
  return (
    <React.Fragment>
      <LeaveDetail leave={leave}/>
    </React.Fragment>
  );
}

export default LeaveDetailPage;
export async function loader({ request, params }) {
  let url = "https://woodvale-test-2.onrender.com/leave-records/leave/";
  const token = getAuthToken();
  const id = params.leaveId;
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
    throw json({ message: "Wrong Url" }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData);
  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();

  const id = params.leaveId;
  const Id = params.id;
  const response = await fetch("https://woodvale-test-2.onrender.com/leave-records/" + id, {
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
      { message: "Could not delete incident." },
      {
        status: 500,
      }
    );
  }
  return redirect(`/login/residents/${Id}/leaves`);
}
