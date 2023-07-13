import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import ViewIncidents from "../../components/IncidentComps/ViewIncidents";
import { getAuthToken } from "../../util/Auth";

function ViewIncidentsPage() {
  const incidents = useRouteLoaderData("incidents");
  return (
    <React.Fragment>
      <ViewIncidents incidents={incidents} />
    </React.Fragment>
  );
}

export default ViewIncidentsPage;
export async function loader({ request, params }) {
  const id = params.id;
  let url = "/incident-reports/" + id;
  const token = getAuthToken();

  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 404) {
    return response;
  }
  if (response.status === 400) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Wrong Url" }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData);
  return resData;
}