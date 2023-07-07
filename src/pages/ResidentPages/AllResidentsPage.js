import React, { Suspense } from "react";
import ResidentList from "../../components/ResidentComps/ResidentList";
import { getAuthToken } from "../../util/Auth";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";

function AllResidentsPage() {
  const { residentsList } = useRouteLoaderData("all-residents");
  return (
    <React.Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={residentsList}>
          {(loadedResidents) => (
            <ResidentList residentsList={loadedResidents} />
          )}
        </Await>
      </Suspense>
    </React.Fragment>
  );
}

export default AllResidentsPage;

async function AllResidentsLoader() {
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
    console.log(resData)
    return resData;
  }
}

export async function loader() {
  return defer({
    residentsList: await AllResidentsLoader(),
  });
}
