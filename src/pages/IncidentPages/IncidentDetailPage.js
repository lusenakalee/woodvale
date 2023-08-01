import React from "react";
import IncidentDetail from "../../components/IncidentComps/IncidentDetail";
import { getAuthToken } from "../../util/Auth";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

function IncidentDetailPage() {
  const incident = useRouteLoaderData("incident");
  return (
    <React.Fragment>
      <IncidentDetail incident={incident} />
    </React.Fragment>
  );
}

export default IncidentDetailPage;

export async function loader({ request, params }) {
  let url = "https://woodvale-test-2.onrender.com/incident-reports/";
  const token = getAuthToken();
  const id = params.incidentId;
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

const id = params.incidentId;
const Id = params.id;
  const response = await fetch("https://woodvale-test-2.onrender.com/incident-reports/" + id, {
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
  return redirect(`/login/residents/${Id}/incident`);
}
