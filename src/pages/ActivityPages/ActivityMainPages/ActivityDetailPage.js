import React from 'react'
import ActivityDetail from '../../../components/ActivityComps/ActivityDetail'
import { getAuthToken } from '../../../util/Auth';
import { json, useRouteLoaderData } from 'react-router-dom';

function ActivityDetailPage() {
    const activity = useRouteLoaderData("activity-detail")
  return (
    <ActivityDetail activity={activity}/>
  )
}

export default ActivityDetailPage

export async function loader({ request, params }) {
    let url = "https://woodvale-test-2.onrender.com/activity/";
    const token = getAuthToken();
    const id = params.id;
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
    return resData;
  }