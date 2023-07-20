import React from "react";
import ResidentDetails from "../../components/ResidentComps/ResidentDetails";
import { defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function ResidentDetailPage() {
  const { resident, image } = useRouteLoaderData("resident-detail");

  return (
    <React.Fragment>
      <ResidentDetails resident={resident} image={image} />
    </React.Fragment>
  );
}

export default ResidentDetailPage;
export async function residentLoader(residentId) {
  let url = "https://woodvale-test-2.onrender.com/residents/";
  const token = getAuthToken();
  const id = residentId;
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

async function imageLoader(residentId) {
  let imageUrl;
  const imgToken = getAuthToken();
  const id = residentId;
  try {
    const response = await fetch(`https://woodvale-test-2.onrender.com/residents/img/${id}`, {
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
  const response = await fetch("https://woodvale-test-2.onrender.com/residents/" + id, {
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

export async function loader({ request, params }) {
  const residentId = params.id
  return defer({
    resident: await residentLoader(residentId),
    image: await imageLoader(residentId),
  });
}
