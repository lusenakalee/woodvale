import React from "react";
import ResidentDetails from "../../components/ResidentComps/ResidentDetails";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function ResidentDetailPage() {
  const resident = useRouteLoaderData("resident-detail");

  return <ResidentDetails resident={resident} />;
}

export default ResidentDetailPage;
export async function loader({ request, params }) {
  let url = "/residents/";
  const token = getAuthToken();
  const id = params.id;
  const response = await fetch(url + id, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Wrong Url" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();

  const id = params.id;
  const response = await fetch("/residents/" + id, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json(
      { message: "Could not delete resident." },
      {
        status: 500,
      }
    );
  }
  return redirect("/login/residents");
}
