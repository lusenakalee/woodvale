import React, { useState } from "react";
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

async function imageLoader({ request, params }) {
  let imageUrl;
  const imgToken = getAuthToken();
  const id = params.id;
  try {
    const response = await fetch(`/residents/img/${id}`, {
      headers: {
        Authorization: "Bearer " + imgToken,
      },
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      imageUrl = url;
      return imageUrl;
    } else {
      console.error("Error fetching image:", response.status);
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
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
