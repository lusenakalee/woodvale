import React from "react";
import ResidentList from "../../components/ResidentComps/ResidentList";
import { getAuthToken } from "../../util/Auth";
import { json, useRouteLoaderData } from "react-router-dom";

function AllResidentsPage() {
  const residentsList = useRouteLoaderData("all-residents");
  return (
    <React.Fragment>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ResidentList residentsList={residentsList} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default AllResidentsPage;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch("/residents", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw json({ message: "Cant get residents" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

