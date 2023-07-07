import React, { Suspense } from "react";
import { getAuthToken } from "../../../util/Auth";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import ActivitiesList from "../../../components/ActivityComps/ActivitiesList";

function ActivitiesPage() {
  const { activities } = useRouteLoaderData('activities');
  return (
    <React.Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={activities}>
          {(loadedActivities) => (
            <ActivitiesList activities={loadedActivities} />
          )}
        </Await>
      </Suspense>
    </React.Fragment>
  );
}

export default ActivitiesPage;

async function AllActivitiesLoader() {
  const token = getAuthToken();

  const response = await fetch("/activity", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw json({ message: "Cant get activities" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}

export async function activitiesLoader() {
  return defer({
    activities: await AllActivitiesLoader(),
  });
}
