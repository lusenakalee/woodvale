import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import LogItem from "../../components/LogsComps/LogItem";

function LogDetailsPage() {
  const log = useRouteLoaderData("log-detail");
  return (
    <React.Fragment>
      <LogItem log={log} />
    </React.Fragment>
  );
}

export default LogDetailsPage;

export async function loader({ request, params }) {
  const token = getAuthToken();
  const id = params.logID;
  const response = await fetch(`https://homes-test.onrender.com/daily-records/${id}/record`, {
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
  return resData;
}
